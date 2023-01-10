import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/core/providers/apis/courses.service';
import { TeacherService } from 'src/app/core/providers/apis/teacher.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  coursesDetails: any;
  teacherDetails: any;
  diagnosisDetails: any;
  courseId: string;
  videos: any[] = [];
  videoLink: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _courseService: CourseService,
    private _teacherService: TeacherService
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
        this.coursesDetails = res[2];
        this.videos = this.coursesDetails.video.split(',');
        this.videoLink = this.videos[0];
        this.getTeacher();
        this.getDiagnosis();
      }, (err) => {
        console.log('err', err);
      })
    )
  }

  getTeacher(): void {
    this.serviceSubscription.push(
      this._teacherService.getTeachersData(this.coursesDetails?.teacherId).subscribe(
        (res) => {
          this.teacherDetails = res[0];
        },
        (err) => {
          console.log('err', err);
        })
    )
  }

  getDiagnosis(): void {
    this.serviceSubscription.push(
      this._courseService.getDiagnos(this.coursesDetails?.diagnosisId).subscribe(
        (res) => {
          this.diagnosisDetails = res[0];
        },
        (err) => {
          console.log('err', err);
        })
    )
  }

  onVideoClick(data) {
    if (data) {
      this.videoLink = data;
    } else {
      this.videoLink = this.videos[0];
    }
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }

}
