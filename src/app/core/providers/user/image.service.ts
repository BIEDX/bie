import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}

  uploadImage(file): Observable<any> {
    const formData = new FormData();
    formData.append('file', file)
    return this.http.post<any>(`${environment.apiUrl}/image`, formData);
  }
}
