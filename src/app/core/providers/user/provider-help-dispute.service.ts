import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderHelpDisputeService {
  constructor(private http: HttpClient) {}

  addHelpDispute(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/help-dispute/add`, params);
  }

  getHelpDisputeById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/help-dispute/get/${id}`);
  }

  getHelpDisputeListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/help-dispute/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateHelpDispute(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/help-dispute/update`, params);
  }

  deleteHelpDisputeById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/help-dispute/delete/${id}`);
  }
}
