import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderQualityControlService {
  constructor(private http: HttpClient) {}

  addQualityControl(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/quality-control/add`, params);
  }

  getQualityControlById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/quality-control/get/${id}`);
  }

  getQualityControlListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/quality-control/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateQualityControl(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/quality-control/update`, params);
  }

  deleteQualityControlById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/quality-control/delete/${id}`);
  }
}