import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentComponent, StudentDashboardComponent, ViewCartComponent } from '.';

@NgModule({
  declarations: [
    StudentComponent,
    StudentDashboardComponent,
    ViewCartComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
