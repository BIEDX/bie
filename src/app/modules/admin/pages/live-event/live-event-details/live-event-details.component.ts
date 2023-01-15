import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/core/providers/apis/courses.service';

@Component({
  selector: 'app-live-event-details',
  templateUrl: './live-event-details.component.html',
  styleUrls: ['./live-event-details.component.scss']
})
export class LiveEventDetailsComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
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
    this.serviceSubscription.push(
      this._courseService.getCoursesDetails(this.courseId).subscribe((res) => {
        this.coursesDetails = res;
      }, (err) => {
        console.log('err', err);
      })
    )
  }

  editCourse(id): void {
    this._router.navigateByUrl("/admin/courses/edit" + '?id=' + id);
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }

}
