import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherAddComponent, TeacherDetailsComponent, TeacherEditComponent, TeacherFormComponent, TeacherListComponent } from '.';


@NgModule({
  declarations: [
    TeacherAddComponent,
    TeacherListComponent,
    TeacherFormComponent,
    TeacherEditComponent,
    TeacherDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TeacherRoutingModule
  ],
  exports:[TeacherFormComponent]
})
export class TeacherModule { }
