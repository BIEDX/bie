import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

import { SharedModule } from 'src/app/shared/shared.module';
import { StudentComponent, StudentDashboardComponent, UsgCemComponent, ViewCartComponent } from '.';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [
    StudentComponent,
    StudentDashboardComponent,
    ViewCartComponent,
    UsgCemComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    CarouselModule,
  ]
})
export class StudentModule { }
