import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderMaterLocationService {
  constructor(private http: HttpClient) {}

  addMaterLocation(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/master-location/add`, params);
  }

  getMaterLocationById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-location/get/${id}`);
  }

  getMaterLocationListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-location/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateMaterLocation(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/master-location/update`, params);
  }

  deleteMaterLocationById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/master-location/delete/${id}`);
  }

  deleteMaterLocationByStateId(stateId: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/master-location/delete-by-state-id/${stateId}`);
  }

  deleteMaterLocationByCountryId(countryId: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/master-location/delete-by-country-id/${countryId}`);
  }

  getMaterLocationListAll( state: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-location/get-list/${state}`);
  }
}
