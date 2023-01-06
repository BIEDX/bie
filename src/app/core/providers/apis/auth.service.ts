import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string = '';
  constructor(private http: HttpClient) {
    const result = localStorage.getItem(ConstantsService.LocalStorage.auth);
    if (result) {
      const parsed = JSON.parse(result);
      this.token = parsed.data.jwt
    }
  }

  getUsers() {
    return this.http.get(environment.apiUrl + '/auth', {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }
}
