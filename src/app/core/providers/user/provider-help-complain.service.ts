import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderHelpComplainService {
  constructor(private http: HttpClient) { }

  addHelpComplain(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/help-complain/add`, params);
  }

  getHelpComplainById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/help-complain/get/${id}`);
  }


  getHelpComplainListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/help-complain/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateHelpComplain(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/help-complain/update`, params);
  }

  deleteHelpComplainById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/help-complain/delete/${id}`);
  }
}
