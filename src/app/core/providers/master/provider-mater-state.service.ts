import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderMaterStateService {
  constructor(private http: HttpClient) {}

  addMaterState(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/master-state/add`, params);
  }

  getMaterStateById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-state/get/${id}`);
  }

  getMaterStateListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-state/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateMaterState(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/master-state/update`, params);
  }

  deleteMaterStateById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/master-state/delete/${id}`);
  }

  deleteMaterStateByCountryId(countryId: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/master-state/delete-by-country-id/${countryId}`);
  }

  getMaterStateListAll( country: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-state/get-list/${country}`);
  }
}
