import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  static LocalStorage: any = {
    auth: 'user-key'
  }
  cartSubject = new BehaviorSubject<any>({});
  cartSubjectAsObservable = this.cartSubject.asObservable();

  constructor() { }
}
