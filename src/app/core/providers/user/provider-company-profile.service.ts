import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderCompanyProfileService {
  constructor(private http: HttpClient) {}

  addCompanyProfile(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/company-profile/add`, params);
  }

  getCompanyProfileById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/company-profile/get/${id}`);
  }

  getCompanyProfileListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/company-profile/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateCompanyProfile(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/company-profile/update`, params);
  }

  deleteCompanyProfileById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/company-profile/delete/${id}`);
  }
}