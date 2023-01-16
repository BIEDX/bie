import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/core/providers/apis/courses.service';
import { ProviderUserAuthService } from 'src/app/core/providers/auth/provider-user-auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  courses: any[] = [];
  image: string;
  diagnosisId: string;

  constructor(
    private _courseService: CourseService,
    private _activatedRoute: ActivatedRoute,
    private _providerAuthService: ProviderUserAuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getId();
  }

  getId(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.diagnosisId = params['id'];
        this.getCourses(this.diagnosisId);
      } catch (err) {
        console.log('err..');
      }
    });
  }

  getCourses(data): void {
    this.serviceSubscription.push(
      this._courseService.getCourses(data ? data : null).subscribe(
        (res) => {
          if (Array.isArray(res)) {
            this.courses = res;
            this.courses.forEach(element => {
              this.image = environment.imgUrl + element?.image[0];
            })
          }
        }, (err) => {
          console.log('err', err);
        })
    )
  }

  navigate(id): void {
    if (this._providerAuthService.isUserLogedIn() === false) {
      this._router.navigateByUrl("/auth/sign-in/" + id);
    }
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }

}
