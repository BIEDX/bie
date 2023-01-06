import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderCompanyDetailService {
  constructor(private http: HttpClient) {}

  addCompanyDetail(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/company-detail/add`, params);
  }

  getCompanyDetailById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/company-detail/get/${id}`);
  }

  getCompanyDetailListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/company-detail/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateCompanyDetail(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/company-detail/update`, params);
  }

  deleteCompanyDetailById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/company-detail/delete/${id}`);
  }
}
