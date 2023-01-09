import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/core/providers/apis/courses.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  courseId: string;
  studentId: string;
  payload: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _courseService: CourseService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getId();
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

  addCart(): void {
    this.payload = {
      courseId: this.courseId,
    }
    this.serviceSubscription.push(
      this._courseService.addCart(this.payload).subscribe(
        (res) => {
          console.log('res', res);

        },
        (err) => {
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
