import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderExportCapabilityService {
  constructor(private http: HttpClient) {}

  addExportCapability(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/export-capability/add`, params);
  }

  getExportCapabilityById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/export-capability/get/${id}`);
  }

  getExportCapabilityListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/export-capability/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateExportCapability(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/export-capability/update`, params);
  }

  deleteExportCapabilityById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/export-capability/delete/${id}`);
  }
}