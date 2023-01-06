import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import * as moment from 'moment';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { CryptoConfig } from '../../constants/constants';
import { HttpService } from '../http/http.service';
import { NotificationService } from './notification.service';
export const key = CryptoJS.enc.Utf8.parse(CryptoConfig.encryptionKey);
export const iv = CryptoJS.enc.Utf8.parse(CryptoConfig.encryptionIv);

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  routeSubScription = new Subject();
  serviceSubscription: Subscription[] = [];
  campaignReportSubject = new BehaviorSubject<any>({});
  campaignReportSubjectAsObservable = this.campaignReportSubject.asObservable();

  constructor(
    private _router: Router,
    private _notification: NotificationService,
    private _httpService: HttpService) {

  }


  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
  }

  decrypt(value: string): string {
    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(value),
    });

    return CryptoJS.AES.decrypt(cipherParams, key, {
      iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    }).toString(CryptoJS.enc.Utf8);
  }

  navigateTo(url): void {
    this._router.navigateByUrl(url);
  }

  routerEventReturn(): any {
    this.serviceSubscription.push(this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routeSubScription.next(new Date());
      }
    })
    );
  }

  returnPageState(pageStates, pageState, pageIndex): string {
    let statePage = '';
    const state = pageStates.filter((d) => d.page === pageIndex);
    statePage = state.length > 0 ? state[0].state : pageIndex > 1 ? pageState : '';
    return statePage;
  }

  onPaginationEvent(paginationData, pagination, currentPageInfo): any {
    // && currentPageInfo.page == 10
    if ((paginationData.pageSize !== currentPageInfo.pageLength) || ([0, 1].indexOf(currentPageInfo.page) > -1)) {
      pagination.pageStates = [{ page: 1, state: '' }];
      if (pagination.pageStates.filter((d) => d.page == currentPageInfo.page)?.length === 0) {
        pagination.pageStates.push({ page: currentPageInfo.page, state: pagination.pageState });
      }
    } else {
      if (pagination.pageStates.filter((d) => d.page == currentPageInfo.page)?.length === 0) {
        pagination.pageStates.push({ page: currentPageInfo.page, state: pagination.pageState });
      }
    }
    return pagination.pageStates;
  }

  returnDateYYYYMMMDD(date): string {
    return moment(date).local().format('YYYY-MM-DD');  //moment(date).utc().format('YYYY-MM-DD');
  }

  countryFlagData(data: any) {
    let object = {
      name: '',
      iso2: '',
      dial_code: '',
    };
    if (data) {
      let checkdialcode = data.hasOwnProperty('dial_code') ? true : false;
      checkdialcode = checkdialcode ? data.dial_code.replace('+', '') : false;
      object.name = data.hasOwnProperty('name') ? data.name : object.name;
      object.iso2 = data.hasOwnProperty('iso2') ? data.iso2 : object.iso2;
      object.dial_code = checkdialcode ? '+' + checkdialcode : object.dial_code;
    }
    return object;
  }


  triggerNotification(message, placement, error) {
    this._notification.notify(message, placement, error);
  }

}
