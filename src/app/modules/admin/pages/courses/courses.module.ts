import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailsComponent, CoursesAddComponent, CoursesComponent, CoursesEditComponent, CoursesFromComponent, CoursesListComponent } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFromComponent,
    CoursesAddComponent,
    CoursesEditComponent,
    CoursesListComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoursesRoutingModule
  ],
  exports: [CoursesFromComponent],
})
export class CoursesModule { }
