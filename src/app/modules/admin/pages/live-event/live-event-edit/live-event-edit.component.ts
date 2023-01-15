import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/core/providers/apis/courses.service';

@Component({
  selector: 'app-live-event-edit',
  template: '<app-live-event-from [data]="coursesDetails"></app-live-event-from>',
})
export class LiveEventEditComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  courseId: string;
  coursesDetails: any;

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
    this.serviceSubscription.push(
      this._courseService.getCoursesDetails(this.courseId).subscribe((res) => {
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
