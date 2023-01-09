import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: '<el-header></el-header><router-outlet></router-outlet>',
  styleUrls: []
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
