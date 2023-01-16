import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConstantsService } from 'src/app/core/providers/apis/constants.service';
import { LiveEventService } from 'src/app/core/providers/apis/live-event.service';
import { TeacherService } from 'src/app/core/providers/apis/teacher.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-live-event-details',
  templateUrl: './live-event-details.component.html',
  styleUrls: ['./live-event-details.component.scss']
})
export class LiveEventDetailsComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  eventDetails: any;
  teacherDetails: any;
  eventId: string;
  imgBaseUrl: string;
  data:any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _liveEventService: LiveEventService,
    private _teacherService: TeacherService,
    private _constantService: ConstantsService
  ) { }

  ngOnInit(): void {
    this.imgBaseUrl = environment.imgUrl;
    this.getId();
    this.getCourse();
  }

  getId(): void {
    this.eventId = this._activatedRoute.snapshot.paramMap.get('id');
  }

  getCourse(): void {
    this.serviceSubscription.push(
      this._liveEventService.getEventDetails(this.eventId).subscribe((res) => {
        this.eventDetails = res;
        // this.videos = this.eventDetails.video;
        // this.currentVideoDetail = this.videos[0];
        if (this.eventDetails?.teacherId) {
          this.getTeacher();
        }
      }, (err) => {
        console.log('err', err);
      })
    )
  }

  getTeacher(): void {
    this.serviceSubscription.push(
      this._teacherService.getTeachersData(this.eventDetails?.teacherId).subscribe(
        (res) => {
          this.teacherDetails = res[0];
        },
        (err) => {
          console.log('err', err);
        })
    )
  }

  // onVideoClick(data) {
  //   this.currentVideoDetail = data;
  //   if (data) {
  //     this.videoLink = data?.videoLink;
  //   } else {
  //     this.videoLink = this.videos[0];
  //     this.currentVideoDetail = this.videos;
  //   }
  // }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }

  addCart(data): void {
    console.log('data', data);
    let cartObj = {
      courseName: this.eventDetails?.name,
      coursePrice: this.eventDetails?.price,
      courseDuration: this.eventDetails?.duration,
      courseDescription: this.eventDetails?.description,
      videos: [...data]
    }
    console.log('cartObj', cartObj);
    localStorage.setItem('cart', JSON.stringify(cartObj));
    this._constantService.cartSubject.next(cartObj);
  }

}
