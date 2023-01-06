import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderShippingDetailService {
  constructor(private http: HttpClient) {}

  addShippingDetail(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/shipping-detail/add`, params);
  }

  getShippingDetailById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/shipping-detail/get/${id}`);
  }

  getShippingDetailListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/shipping-detail/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateShippingDetail(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/shipping-detail/update`, params);
  }

  deleteShippingDetailById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/shipping-detail/delete/${id}`);
  }
}