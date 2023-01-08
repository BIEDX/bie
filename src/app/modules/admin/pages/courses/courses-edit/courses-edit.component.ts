import { Component, OnInit } from '@angular/core';
import { CourseDetailsComponent } from '..';

@Component({
  selector: 'app-courses-edit',
  template: '<app-courses-from ></app-courses-from>',
})
// [data]="coursesDetails"
export class CoursesEditComponent implements OnInit {
  // extends CourseDetailsComponent
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // ngAfterViewInit(): void {
  //   this.getId();
  // }

}
