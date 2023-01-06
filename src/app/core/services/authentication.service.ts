import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService, UtilService } from '.';
import { APIENDPOINTS, ApiMethods, UserTypes } from '../../constants';
import { HttpService } from '../http/http.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    userProfileSubject = new BehaviorSubject<any>({});
    userProfileSubjectAsObservable = this.userProfileSubject.asObservable();
    storageEvent = fromEvent(window, 'storage');

    constructor(
        private _storageService: StorageService,
        private _utilService: UtilService,
        private _httpService: HttpService,
        public _modalService: NgbModal) {
        const storage = this._storageService.getToken();

        try {
            this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(storage));
            this.currentUser = this.currentUserSubject.asObservable();
        } catch (err) {
            this.logout();
        }
    }

    ngOnInit() {
    }

    public get currentUserValue(): any {
        return this.currentUserSubject && this.currentUserSubject.value;
    }

    public verifyLoggedInTime(): boolean {
        let data: any = this.currentUserValue?.lt;
        let key = this._utilService.encrypt(data);
        const loggedInTime = this._storageService.getDataByKey(data);
        return loggedInTime == key;
    }

    public get getUserType(): string {
        return (this.currentUserValue?.user_type) ? this.currentUserValue.user_type : '';
    }

    login(user: string, password: string): Observable<any> {
        return this._httpService.apiCall(APIENDPOINTS.USER_LOGIN, ApiMethods.POST, { user, password })
            .pipe(map((data: any) => {
                let loggedInTime = new Date().getTime() + '#@!';
                if (data && data.hasOwnProperty('jwt') && data.jwt != '') {
                    data.lt = loggedInTime;
                    this._storageService.saveToken(JSON.stringify(data));
                    let key = this._utilService.encrypt(loggedInTime);
                    this._storageService.createNewStorageKey(loggedInTime, key);
                    this.currentUserSubject.next(data);
                } else {
                    return { ...data, status: 'errror' };
                }
                return { ...data, status: 'success' };
            }));

    }

    logout(): void {
        this._modalService.dismissAll();
        let payload = {
            "jwtToken": this.currentUserValue?.jwt,
            "refreshToken": this.currentUserValue?.refresh_token
        };
        if (payload.hasOwnProperty('refreshToken') && payload?.refreshToken) {
            this._httpService.apiCall(APIENDPOINTS.USER_LOGOUT, ApiMethods.POST, payload).subscribe();
        }

        this._storageService.removeToken();
        if (this.currentUserSubject) {
            this.currentUserSubject.next(null);
        }
        this._utilService.navigateTo('/login');
    }

    canRead(): boolean {
        const allowed = [UserTypes.ADMIN]
        return this.checkAuthorization(allowed)
    }

    // determines if user has matching role
    private checkAuthorization(allowedRoles: string[]): boolean {
        const user = this.currentUserValue
        for (const role of allowedRoles) {
            if (user.user_type === role) {
                return true
            }
        }
        return false
    }
}
