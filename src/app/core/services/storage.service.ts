import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    saveToken(token: string): void {
        localStorage.setItem('jwt-token', token);
    }

    getToken(): string {
        return localStorage.getItem('jwt-token');
    }

    updateToken(accessToken, jwt, refreshToken): void {
        try {
            let token: any = this.getToken();
            token = JSON.parse(token);
            token = { ...token, accessToken, jwt, refreshToken };
            this.saveToken(JSON.stringify(token));
        } catch (err) {
            console.log('::::::::::::::::::ERROR ON UPDATING TOKEN:::::::::::::::', err);
        }

    }

    removeToken(): void {
        // localStorage.removeItem('jwt-token');
        localStorage.clear();
    }

    getRole(): string {
        return JSON.parse(localStorage.getItem('jwt-token'))?.user_type;
    }

    createNewStorageKey(key: string, value: any) {
        localStorage.setItem(key, value);
    }

    getDataByKey(key: string): string {
        return localStorage.getItem(key);
    }

}
