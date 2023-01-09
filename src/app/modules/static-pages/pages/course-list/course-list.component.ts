import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/core/providers/apis/courses.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];
  image: string;
  diagnosisId: string;

  constructor(
    private _courseService: CourseService,
    private _activatedRoute: ActivatedRoute,
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
  }

  navigate(id): void {

  }

}
