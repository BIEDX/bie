import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  token: string = '';

  constructor(private http: HttpClient) {
    const result = localStorage.getItem(ConstantsService.LocalStorage.auth);
    if (result) {
      const parsed = JSON.parse(result);
      this.token = parsed.data.jwt;
    }
  }

  getNewsLetters() {
    return this.http.get(environment.apiUrl + '/newsletter', {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }
}
