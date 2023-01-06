import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderMaterFilterService {
  constructor(private http: HttpClient) {}

  addMaterFilter(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/master-filter/add`, params);
  }

  getMaterFilterById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-filter/get/${id}`);
  }

  getMaterFilterListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/master-filter/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateMaterFilter(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/master-filter/update`, params);
  }

  deleteMaterFilterById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/master-filter/delete/${id}`);
  }
}
