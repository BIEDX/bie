import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/core/providers/apis/courses.service';
import { CourseDetailsComponent } from '..';

@Component({
  selector: 'app-courses-edit',
  template: '<app-courses-from [data]="coursesDetails"></app-courses-from>',
})
export class CoursesEditComponent implements OnInit {
  courseId: string;
  coursesDetails: any;
  // extends CourseDetailsComponent
  // ngAfterViewInit(): void {
  //   this.getId();
  // }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _courseService: CourseService,
  ) {

  }
  ngOnInit(): void {
    this.getId();
    this.getCourse();
  }

  getId(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.courseId = params['id'];
      } catch (err) {
        console.log('err..');
      }
    });
  }

  getCourse(): void {
    let data = {
      value: this.courseId,
      type: 'get'
    }
    this._courseService.getCourses(data).subscribe((res) => {
      this.coursesDetails = res;
    }, (err) => {
      console.log('err', err);
    })
  }

}
