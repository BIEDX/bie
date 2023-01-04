import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConstantsService } from './constants.service';

export enum Role {
  Admin = 'admin',
  Student= 'student',
  Teacher = 'teacher'
}

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
  token: string = '';

  constructor(private http: HttpClient) {
    const result = localStorage.getItem(ConstantsService.LocalStorage.auth);
    if (result) {
      const parsed = JSON.parse(result);
      this.token = parsed.data.jwt;
    }
  }

  getTeachers() {
    return this.http.get(environment.apiUrl + '/auth', {
      params: { role: Role.Teacher },
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }

  createTeacher(values) {
    return this.http.post(environment.apiUrl + '/auth/sign-up-teacher', { ...values }, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }
}
