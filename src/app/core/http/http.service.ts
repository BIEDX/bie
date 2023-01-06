import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { APIENDPOINTS } from '../../constants/api-endpoints';
import { ApiMethods } from '../../constants/constants';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    apiUrl: string;
    constructor(private _http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }


    apiCall(api: APIENDPOINTS, method: ApiMethods, payload: any, queryString: string = '', routeParam: string = '', v2 = false): Observable<any> {
        this.apiUrl = environment.apiUrl;
        let response: any;
        switch (method) {
            case ApiMethods.GET:
                let q = routeParam != '' ? '/' + routeParam : (queryString !== '' ? '?' + queryString : '');
                response = this._http.get(`${this.apiUrl}${api + q}`)
                    .pipe(catchError(((err: HttpErrorResponse) => this.handleError(err)
                    )));
                break;
            case ApiMethods.POST:
                let q1 = routeParam != '' ? '/' + routeParam : (queryString !== '' ? '?' + queryString : '');
                response = this._http.post(`${this.apiUrl}${api + q1}`, payload)
                    .pipe(catchError(((err: HttpErrorResponse) => this.handleError(err)
                    )));
                break;
            case ApiMethods.PATCH:
                let q2 = routeParam != '' ? '/' + routeParam : '';
                response = this._http.patch(`${this.apiUrl}${api + q2}`, payload)
                    .pipe(catchError(((err: HttpErrorResponse) => this.handleError(err)
                    )));
                break;
            case ApiMethods.DELETE:
                let q3 = routeParam != '' ? '/' + routeParam : (queryString !== '' ? '?' + queryString : '');
                response = this._http.delete(`${this.apiUrl}${api + q3}`, payload)
                    .pipe(catchError(((err: HttpErrorResponse) => this.handleError(err)
                    )));
                break;
            case ApiMethods.PUT:
                let q4 = routeParam != '' ? '/' + routeParam : (queryString !== '' ? '?' + queryString : '');
                response = this._http.put(`${this.apiUrl}${api + q4}`, payload)
                    .pipe(catchError(((err: HttpErrorResponse) => this.handleError(err)
                    )));
                break;
            default:
                break;
        }
        return response;
    }

    handleError(error: HttpErrorResponse): any {
        const errorResponse = { message: error?.error?.message || "Something went wrong", statusText: error?.statusText, status: error?.status };
        return throwError(errorResponse);
    }

}
