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

export class LiveEventService {
    token: string = '';

    constructor(private http: HttpClient) {
        const result = localStorage.getItem(ConstantsService.LocalStorage.auth);
        if (result) {
            const parsed = JSON.parse(result);
            this.token = parsed.data.jwt;
        }
    }

    getEvent(data: { value: any; type?: string; }) {
        return this.http.get(environment.apiUrl + '/live-event', {
            // if(data.type==) {
            //     params: { searchText: data.value }
            // }
            // else{
            //     params: { id: data.value }
            // },
            params: { searchText: data?.value ? data?.value : null },
            headers: { Authorization: 'Bearer ' + this.token },
        });
    }

    getEventDetails(data) {
        return this.http.get(environment.apiUrl + '/live-event/detail', {
            params: { courseId: data },
            headers: { Authorization: 'Bearer ' + this.token },
        });
    }

    getBodyParts() {
        return this.http.get(environment.apiUrl + '/body-parts', {
            headers: { Authorization: 'Bearer ' + this.token },
        });
    }
    getDiagnos(data: any) {
        return this.http.get(environment.apiUrl + '/diagnosis', {
            params: { bodyPartId: data },
            headers: { Authorization: 'Bearer ' + this.token },
        });
    }

    createEvent(values) {
        return this.http.post(environment.apiUrl + '/live-event', { ...values }, {
            headers: { Authorization: 'Bearer ' + this.token },
        });
    }

    updateEvent(values) {
        return this.http.put(environment.apiUrl + '/courses', { ...values }, {
            headers: { Authorization: 'Bearer ' + this.token },
        });
    }

    getImages(data: any) {
        const formData = new FormData();
        formData.append('file', data)
        return this.http.post(environment.apiUrl + '/image', formData, {
        });
    }

    addCart(values) {
        return this.http.post(environment.apiUrl + '/courses', { ...values }, {
            params: { role: Role.Student },
            headers: { Authorization: 'Bearer ' + this.token },
        });
    }
}
