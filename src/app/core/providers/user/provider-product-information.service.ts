import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderProductInformationService {
  constructor(private http: HttpClient) {}

  addProductInformation(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/product-information/add`, params);
  }

  getProductInformationById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/product-information/get/${id}`);
  }

  getProductInformationListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/product-information/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateProductInformation(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/product-information/update`, params);
  }

  deleteProductInformationById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/product-information/delete/${id}`);
  }
}