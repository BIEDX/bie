import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderTradeInformationService {
  constructor(private http: HttpClient) {}

  addTradeInformation(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/trade-information/add`, params);
  }

  getTradeInformationById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/trade-information/get/${id}`);
  }

  getTradeInformationListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/trade-information/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateTradeInformation(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/trade-information/update`, params);
  }

  deleteTradeInformationById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/trade-information/delete/${id}`);
  }
}