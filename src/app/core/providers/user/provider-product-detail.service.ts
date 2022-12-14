import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderProductDetailService {
  constructor(private http: HttpClient) {}

  addProductDetail(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/product-detail/add`, params);
  }

  getProductDetailById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/product-detail/get/${id}`);
  }

  getProductDetailListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/product-detail/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateProductDetail(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/product-detail/update`, params);
  }

  deleteProductDetailById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/product-detail/delete/${id}`);
  }
}