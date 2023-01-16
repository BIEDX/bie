import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',

})
export class StudentComponent implements OnInit {
  includeRoute: boolean;
  includeDetailRoute: boolean;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.includeRoute = this._router.url.includes('view-cart');
    this.includeDetailRoute = this._router.url.includes('details');
  }

}
