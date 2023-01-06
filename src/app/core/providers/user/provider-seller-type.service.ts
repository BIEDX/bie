import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderSellerTypeService {
  constructor(private http: HttpClient) {}

  addSellerType(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/seller-type/add`, params);
  }

  getSellerTypeById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/seller-type/get/${id}`);
  }

  getSellerTypeListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/seller-type/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateSellerType(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/seller-type/update`, params);
  }

  deleteSellerTypeById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/seller-type/delete/${id}`);
  }
}