import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderHelpSuggestionService {
  constructor(private http: HttpClient) {}

  addHelpSuggestion(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/help-suggestion/add`, params);
  }

  getHelpSuggestionById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/help-suggestion/get/${id}`);
  }

  getHelpSuggestionListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/help-suggestion/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateHelpSuggestion(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/help-suggestion/update`, params);
  }

  deleteHelpSuggestionById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/help-suggestion/delete/${id}`);
  }
}
