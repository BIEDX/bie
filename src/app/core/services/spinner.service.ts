import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { fromEvent } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
    onlineEvent = fromEvent(window, 'online');
    offlineEvent = fromEvent(window, 'offline');

    constructor(private _spinner: NgxSpinnerService) { }

    showLoader(): void {
        this._spinner.show('customspinner', {
            type: 'ball-clip-rotate',
            size: 'medium',
        });
    }

    hideLoader(): void {
        this._spinner.hide('customspinner');
    }

    returnCurrentPageState(pageStates, pageState, pageIndex): string {
        let statePage = '';
        const state = pageStates.filter((d) => d.page === pageIndex);
        statePage = state.length > 0 ? state[0].state : pageIndex > 1 ? pageState : '';
        return statePage;
    }
}
