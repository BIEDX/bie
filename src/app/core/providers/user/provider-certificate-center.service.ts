import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderCertificateCenterService {
  constructor(private http: HttpClient) {}

  addCertificateCenter(params: any = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/certificate-center/add`, params);
  }

  getCertificateCenterById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/certificate-center/get/${id}`);
  }

  getCertificateCenterListByFilter(index: number = 0, length: number = 10, query: any = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/certificate-center/get-list/${index}/${length}/${JSON.stringify(query)}`);
  }

  updateCertificateCenter(params: any = {}): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/certificate-center/update`, params);
  }

  deleteCertificateCenterById(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/certificate-center/delete/${id}`);
  }
}
