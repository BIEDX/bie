import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderCategoryService {
  constructor(private http: HttpClient) {}

  addCategory(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/category/add`, params);
  }

  getCategoryById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/category/get/${id}`);
  }

  getCategoryListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/category/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateCategory(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/category/update`, params);
  }

  deleteCategoryById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/category/delete/${id}`);
  }
}
