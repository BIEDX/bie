import { Component, OnInit } from '@angular/core';
import { TeacherDetailsComponent } from '..';

@Component({
  selector: 'app-teacher-edit',
  template: '<app-teacher-form [data]="teacherDetails"></app-teacher-form>',
})
export class TeacherEditComponent extends TeacherDetailsComponent implements OnInit {

  ngAfterViewInit(): void {
    this.getId();
  }

}
