import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/core/providers/apis/courses.service';
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
  constructor(
    private _courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCourses('');
  }

  getCourses(data): void {
    this.serviceSubscription.push(
      this._courseService.getCourses(data ? data : null).subscribe(
        (res) => {
          if (Array.isArray(res)) {
            this.courses = res;
            this.courses.forEach(element => {
              this.image = environment.imgUrl + element?.image;
            })
          }
        }, (err) => {
          console.log('err', err);
        })
    )
  }

  searchCourses(event): void {
    let data = event.target.value;
    let item = {
      value: data,
      type: 'search'
    }
    this.getCourses(item);
  }

  seeDetails(_id): void {
    this.router.navigateByUrl("/student/course/details" + '?id=' + _id)
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }

}
