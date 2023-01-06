import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RetryBackoffConfig } from 'backoff-rxjs';
import { environment } from '../../../environments/environment';
import { defer, iif, Observable, of, throwError, timer } from 'rxjs';
import { catchError, concatMap, retryWhen, switchMap, tap } from 'rxjs/operators';
import { expRetryConfig } from '../../constants/expotential-retry-config';
import { BackOffService } from '../../core/services/backoff.service';
import { AuthenticationService, NotificationService, StorageService, SpinnerService } from '../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  auth: any;
  currentUser: any;
  isLoggedIn: any;
  constructor(
    private _authenticationService: AuthenticationService,
    private _http: HttpClient,
    private _notificaitonService: NotificationService,
    private _backoffService: BackOffService,
    private _spinner: SpinnerService,
    private _storageService: StorageService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.currentUser = this._authenticationService.currentUserValue;
    this.isLoggedIn = this.currentUser && this.currentUser.jwt;
    if (this.isLoggedIn) {
      if (request.url.indexOf('geocode') == -1) {
        if (request.url.indexOf('refreshToken') > -1) {
          const refresh_token = this.currentUser?.refresh_token;
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${refresh_token}`,
            },
          });
        } else {
          let token = this.currentUser.jwt;
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
        }

      }

    }
    return next.handle(request).pipe(
      retryBackoff(expRetryConfig, this._backoffService),
      catchError((error) => this.handleHttpError(error, request, next)),
    );
  }

  private handleHttpError(error: any | Response, request: HttpRequest<any>, next: HttpHandler) {
    if (error.status === 401) {
      if (request.url.indexOf('refreshToken') > -1) {
        console.log("refresh_token 0",error);
        this._authenticationService.logout();
        let message = 'The Session has Expired. Please Login Again.';
        this._notificaitonService.notify(message,'top','error')
        this._spinner.hideLoader();
        return error.status == 401 ? throwError(error) : of(error);
      }
      const refresh_token = this.currentUser?.refresh_token;

      if (refresh_token) {
        const url = `${environment.apiUrl}/${this.currentUser.user_type ? 'user' : 'user'}/refreshToken`;
        return this._http
          .post<any>(url, {})
          .pipe(
            switchMap(res => {
              if (res) {
                this._storageService.updateToken(res?.access_token, res?.jwt, refresh_token);
                request = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${res.jwt}`,
                  },
                });

                return next.handle(request).pipe(catchError((error) => {
                  console.log("refresh_token 1",error);
                  this._authenticationService.logout();
                  return throwError(error);
                }));
              } else {
                this._authenticationService.logout();
              }
            }),
            catchError((error) => {
              console.log("refresh_token 2",error,  error.subscribe(d => { console.log("refresh_token 2",d)}))
              this._authenticationService.logout();
              return throwError(error);
            }),
          );
      } else {
        this._authenticationService.logout();
      }
    } else if (error.status === 400) {
      if (error.error?.message) {
        this._notificaitonService.notify(error.error?.message, 'top', 'error');
      }
    } else if (error.status === 0 || error.status === 404) {

      this._spinner.hideLoader();
      this._notificaitonService.notify(error?.message ? error.message : "Something went wrong. Please try again", 'top', 'error');
    }

    return error.status > 399 ? throwError(error) : of(error);
  }
}

export function retryBackoff(
  config: number | RetryBackoffConfig,
  backoffService: BackOffService,
): <T>(source: Observable<T>) => Observable<T> {
  const {
    initialInterval,
    maxRetries = Infinity,
    maxInterval = Infinity,
    shouldRetry = () => true,
    resetOnSuccess = false,
    backoffDelay = exponentialBackoffDelay,
  } = typeof config === 'number' ? { initialInterval: config } : config;
  return <T>(source: Observable<T>) =>
    defer(() => {
      let index = 0;
      return source.pipe(
        retryWhen<T>((errors) =>
          errors.pipe(
            concatMap((error) => {
              const attempt = index++;
              const nextRetryInterval = getDelay(backoffDelay(attempt, initialInterval), maxInterval);
              return iif(
                () => {
                  const retry = attempt < maxRetries && shouldRetry(error);

                  if (retry) {
                    backoffService.updateBackOffStatus('retrying', nextRetryInterval);
                  }

                  return retry && backoffService.backoffEnabled;
                },
                timer(nextRetryInterval),
                throwError(error),
              );
            }),
            tap({ error: () => backoffService.updateBackOffStatus('fail', null) }),
          ),
        ),
        tap({
          complete: () => {
            index > 0 && backoffService.updateBackOffStatus('success', null);
          },
        }),
      );
    });
}
/** Calculates the actual delay which can be limited by maxInterval */
export function getDelay(backoffDelay: number, maxInterval: number) {
  return Math.min(backoffDelay, maxInterval);
}

/** Exponential backoff delay */
export function exponentialBackoffDelay(iteration: number, initialInterval: number) {
  return Math.pow(2, iteration) * initialInterval;
}
