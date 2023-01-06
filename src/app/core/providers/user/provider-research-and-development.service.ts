import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderResearchAndDevelopmentService {
  constructor(private http: HttpClient) {}

  addResearchAndDevelopment(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/research-and-development/add`, params);
  }

  getResearchAndDevelopmentById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/research-and-development/get/${id}`);
  }

  getResearchAndDevelopmentListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/research-and-development/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateResearchAndDevelopment(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/research-and-development/update`, params);
  }

  deleteResearchAndDevelopmentById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/research-and-development/delete/${id}`);
  }
}