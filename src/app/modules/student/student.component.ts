import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',

})
export class StudentComponent implements OnInit {
  includeRoute: boolean;
  includeDetailRoute: boolean;
  user: any;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.includeRoute = this._router.url.includes('view-cart');
    this.includeDetailRoute = this._router.url.includes('details');
    const result = localStorage.getItem('user-key');
    if (result) {
      const parse = JSON.parse(result);
      this.user = parse;
      console.log('user', this.user);
    }
  }

}
