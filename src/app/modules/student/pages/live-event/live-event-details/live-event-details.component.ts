import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConstantsService } from 'src/app/core/providers/apis/constants.service';
import { LiveEventService } from 'src/app/core/providers/apis/live-event.service';
import { TeacherService } from 'src/app/core/providers/apis/teacher.service';

@Component({
  selector: 'app-live-event-details',
  templateUrl: './live-event-details.component.html',
  styleUrls: ['./live-event-details.component.scss']
})
export class LiveEventDetailsComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  coursesDetails: any;
  teacherDetails: any;
  diagnosisDetails: any;
  currentVideoDetail: any;
  courseId: string;
  videos: any[] = [];
  videoLink: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _courseService: LiveEventService,
    private _teacherService: TeacherService,
    private _constantService: ConstantsService
  ) { }

  ngOnInit(): void {
    this.getId();
    this.getCourse();
  }

  getId(): void {
    this.courseId = this._activatedRoute.snapshot.paramMap.get('id');
  }

  getCourse(): void {
    this.serviceSubscription.push(
      this._courseService.getCoursesDetails(this.courseId).subscribe((res) => {
        this.coursesDetails = res;
        this.videos = this.coursesDetails.video;
        this.currentVideoDetail = this.videos[0];
        this.videoLink = this.videos[0]?.videoLink;
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
    this.currentVideoDetail = data;
    if (data) {
      this.videoLink = data?.videoLink;
    } else {
      this.videoLink = this.videos[0];
      this.currentVideoDetail = this.videos;
    }
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }

  addCart(data): void {
    console.log('data', data);
    let cartObj = {
      courseName: this.coursesDetails?.name,
      coursePrice: this.coursesDetails?.price,
      courseDuration: this.coursesDetails?.duration,
      courseDescription: this.coursesDetails?.description,
      videos: [...data]
    }
    console.log('cartObj', cartObj);
    localStorage.setItem('cart', JSON.stringify(cartObj));
    this._constantService.cartSubject.next(cartObj);
  }

}
