import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/core/providers/apis/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  coursesDetails: any;
  courseId: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _courseService: CourseService,
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
    this.serviceSubscription.push(
      this._courseService.getCourses(data).subscribe((res) => {
        this.coursesDetails = res;
      }, (err) => {
        console.log('err', err);
      })
    )
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }

}
