import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConstantsService } from './constants.service';

export enum Role {
  Admin = 'admin',
  Student = 'student',
  Teacher = 'teacher'
}

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  token: string = '';

  constructor(private http: HttpClient) {
    const result = localStorage.getItem(ConstantsService.LocalStorage.auth);
    if (result) {
      const parsed = JSON.parse(result);
      this.token = parsed.data.jwt;
    }
  }

  getBlogs() {
    return this.http.get(environment.apiUrl + '/blog', {
      params: { role: Role.Teacher },
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }
  getBlogById(id) {
    return this.http.get(environment.apiUrl + '/blog/' + id, {
      params: { role: Role.Teacher },
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }
  createBlog(values) {
    return this.http.post(environment.apiUrl + '/blog', { ...values }, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }

  addBlogReply(values) {
    return this.http.post(environment.apiUrl + '/reply', { ...values }, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }

  updateBlogReply(values) {
    return this.http.put(environment.apiUrl + '/reply', { ...values }, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }

  getReplyBlogs(id) {
    return this.http.get(environment.apiUrl + '/reply/detail/' + id, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }

  getReplyBlogsById(id) {
    return this.http.get(environment.apiUrl + '/reply/' + id, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }

  deleteReplyBlogs(id) {
    return this.http.delete(environment.apiUrl + '/reply/' + id, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }
}
