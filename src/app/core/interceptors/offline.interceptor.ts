import { Injectable } from "@angular/core";
import { NotificationService, SpinnerService, } from "../services";
import { EMPTY } from 'rxjs';
@Injectable()
export class OfflineInterceptor {
    constructor(
        private _spinner: SpinnerService,
        private _notification: NotificationService
    ) { }
    offlineMessage = 'YOU ARE OFFLINE. PLEASE CHECK YOUR INTERNET CONNECTION.';

    get isOnline() {
        return navigator.onLine;
    }

    intercept(request, next) {
        if (!this.isOnline) {
            console.log("offline....");
            this._notification.notify(this.offlineMessage, 'top', 'error');
            this._spinner.hideLoader();
            return EMPTY;
        }

        return next.handle(request);
    }
}