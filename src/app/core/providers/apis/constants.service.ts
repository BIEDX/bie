import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  static LocalStorage:any = {
    auth:'user-key'
  }
  constructor() { }
}
