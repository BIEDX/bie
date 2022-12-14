import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormProductService {

  constructor(private http: HttpClient) {}

  
  addProductDetails(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/product/add`, params);
  }
  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/product/get/${id}`);
  }
  
  getProductFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/product/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateProductControl(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/product/update`, params);
  }

  deleteProductById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/product/delete/${id}`);
  }

  
}
