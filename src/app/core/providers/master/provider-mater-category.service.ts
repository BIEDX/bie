import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderMaterCategoryService {
  constructor(private http: HttpClient) {}

  addMaterCategory(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/master-category/add`, params);
  }

  getMaterCategoryById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-category/get/${id}`);
  }

  getMaterCategoryListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-category/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateMaterCategory(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/master-category/update`, params);
  }

  deleteMaterCategoryById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/master-category/delete/${id}`);
  }
}
