import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/core/providers/apis/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  coursesDetails: any;
  courseId: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _courseService: CourseService,
    private _router: Router
  ) { }

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

  editCourse(id): void {
    this._router.navigateByUrl("/admin/courses/edit" + '?id=' + id);
  }

}
