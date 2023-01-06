import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderMaterCountryService {
  constructor(private http: HttpClient) {}

  addMaterCountry(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/master-country/add`, params);
  }

  getMaterCountryById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-country/get/${id}`);
  }

  getMaterCountryListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-country/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateMaterCountry(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/master-country/update`, params);
  }

  deleteMaterCountryById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/master-country/delete/${id}`);
  }

  getMaterCountryList(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-country/get-list`);
  }
}
