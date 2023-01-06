import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
// import jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class ProviderUserAuthService {
  public currentUserObservable: Observable<any>;
  private currentUserKey = 'currentUserAuth';
  private rememberMeCredentialsKey = 'rememberMeCredentials';
  private currentUserSubject: BehaviorSubject<any>=new BehaviorSubject({});

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem(this.currentUserKey)));
    //this.currentUserObservable = this.currentUserSubject.asObservable();
  }

  // START GETTER CODE
  // public get currentUserValue(): any {
  //   return this.currentUserSubject.value != null ? this.currentUserSubject.value.data : null;
  // }
  // public get currentUserValueObjToken(): any {
  //   return this.currentUserSubject.value != null ? this.currentUserSubject.value.data.jwt : null;
  // }
  // public get currentUserValueObjTokenDecoded(): any {
  //   return this.currentUserSubject.value != null ? jwt_decode(this.currentUserSubject.value.data.jwt) : null;
  // }
  // END  GETTER CODE

  // START SETTER CODE
  // public get getRememberMeCredentials(): any {
  //   return JSON.parse(localStorage.getItem(this.rememberMeCredentialsKey));
  // }

  // public set setRememberMeCredentials(rememberMeCredentials) {
  //   localStorage.setItem(this.rememberMeCredentialsKey, JSON.stringify(rememberMeCredentials));
  // }
  // START SETTER CODE

  // START FUNTION CODE
  // public navToPortalIfAuthenticated() {
  //   if (this.currentUserValue != null && this.currentUserValueObjToken) {
  //     const role = this.currentUserValue.role;
  //     if ('admin' === role) {
  //       this.router.navigateByUrl('/admin');
  //     } else if ('agent' === role) {
  //       this.router.navigateByUrl('/agent');
  //     } else if ('associate' === role) {
  //       this.router.navigateByUrl('/associate');
  //     } else if ('buyer' === role) {
  //       this.router.navigateByUrl('/buyer');
  //     } else if ('seller' === role) {
  //       this.router.navigateByUrl('/seller');
  //     } else if ('buyer-seller' === role) {
  //       this.router.navigateByUrl('/buyer-seller');
  //     } else {
  //       this.router.navigateByUrl('/user-auth');
  //     }
  //   }
  // }

  // public navToAuthIfNotAuthenticated() {
  //   if (this.currentUserValue != null && this.currentUserValueObjToken) {
  //   } else {
  //     this.router.navigateByUrl('/user-auth');
  //   }
  // }

  // userSignUpVerify(params: any = {}): Observable<any> {
  //   return this.http.post<any>(`${environment.apiUrl}/auth/sign-up-verify`, params)
  //     .pipe(map(res => {
  //       if (res.header.code === 200) {
  //         localStorage.setItem(this.currentUserKey, JSON.stringify(res));
  //         this.currentUserSubject.next(res);
  //       }
  //       return res;
  //     }));
  // }

  userSignIn(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/sign-in`, params)
      // .pipe(map((res:any) => {
      //   if (res.header.code === 200) {
      //     localStorage.setItem(this.currentUserKey, JSON.stringify(res));
      //     this.currentUserSubject.next(res);
      //   }
      //   return res;
      // }));
  }

  userSignUp(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/sign-up`, params)
  }

  // userForgotPassword(params: any = {}): Observable<any> {
  //   return this.http.post<any>(`${environment.apiUrl}/auth/forgot-password`, params)
  // }

  // userResetPassword(params: any = {}): Observable<any> {
  //   return this.http.post<any>(`${environment.apiUrl}/auth/reset-password`, params)
  // }

  // userSignOutNoApiCall(nav = true) {
  //   localStorage.removeItem(this.currentUserKey);
  //   this.currentUserSubject.next(null);
  //   if (nav) {
  //     this.navToAuthIfNotAuthenticated();
  //   }
  // }

  // userSignOut(params: any = {}): Observable<any> {
  //   if (this.currentUserValueObjToken) {
  //     params = {
  //       auth_key: String(this.currentUserValueObjToken).split('.')[1]
  //     };
  //   }

  //   localStorage.removeItem(this.currentUserKey);
  //   this.currentUserSubject.next(null);

  //   return this.http.post<any>(`${environment.apiUrl}/auth/sign-out`, params)
  //     .pipe(map(res => {
  //       this.navToAuthIfNotAuthenticated();
  //       return res;
  //     }), catchError(err => {
  //       this.navToAuthIfNotAuthenticated();
  //       throw err;
  //     }));
  // }

  // userGetRecoverPwdAccountInfo(params: any = {}): Observable<any> {
  //   return this.http.post<any>(`${environment.apiUrl}/auth/forgot-password`, params);
  // }

  // userGetRecoverPwdAccountOtp(params: any = {}): Observable<any> {
  //   return this.http.post<any>(`${environment.apiUrl}/auth/reset-password`, params);
  // }

  userStorage(value:any){
    localStorage.setItem('user-key', JSON.stringify(value));
         this.currentUserSubject.next(value);
  }
  getUserStorage(){    
       return  this.currentUserSubject
  }
}
