import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderBrandApprovalService {
  constructor(private http: HttpClient) {}

  addBrandApproval(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/brand-approval/add`, params);
  }

  getBrandApprovalById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/brand-approval/get/${id}`);
  }

  getBrandApprovalListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/brand-approval/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateBrandApproval(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/brand-approval/update`, params);
  }

  deleteBrandApprovalById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/brand-approval/delete/${id}`);
  }
}
