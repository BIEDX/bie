import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventRegistration } from 'src/app/core/constants';
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
  formGroup: FormGroup;
  userDetails: any;
  template: boolean = false;
  payload: EventRegistration;
  firstDayEventDetail: any;
  secondDayEventDetail: any;
  bothDayEventDetail: any;
  cancelPolicyText = " Any cancellation or replacement must be conveyed to the Organizer in writing. A cancellation fee of 50% of the registration fee will be charged if the cancellation is received on or before 31st January 2023. There will be no refund of registration fee for cancellations made after 31st January 2023. The Organizer reserves the right to modify the programme and/or the terms. Full refund minus admin charges will be made should the course be cancelled due to unforeseen circumstances and all refunds will be made after the actual event date. Admin charges refer to any charges incurred to the organizers up until the point of cancellation."
  userAgreementText = "By registering for the course, the participants fully understand and consent for the photographs / videos/ data collected before, during, and after the workshop to be used by the course organizers for teaching, research, and publicity purposes. Pursuant thereto, the participants agree not to hold the organizers liable for any consequences that may follow any such disclosures."
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _liveEventService: LiveEventService,
    private _teacherService: TeacherService,
    private _constantService: ConstantsService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.imgBaseUrl = environment.imgUrl;
    this.getId();
    this.getCourse();
    this.buildForm();
    const result = localStorage.getItem('user-key');
    if (result) {
      const parse = JSON.parse(result);
      this.userDetails = parse;
      console.log('userDetails', this.userDetails?.data);

    }
  }
  ngAfterViewInit(): void {
    if (this.userDetails) {
      this.patchFormData(this.userDetails?.data);
    }
  }
  getId(): void {
    this.eventId = this._activatedRoute.snapshot.paramMap.get('id');
  }

  patchFormData(data): void {
    this.formGroup.patchValue({
      name: data?.name ? data?.name : '',
      email: data?.email ? data?.email : '',
      phone: data?.phone ? data?.phone : '',
    })
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

  buildForm(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      alternateEmail: [''],
      phone: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      country: ['', [Validators.required]],
      mcrNumber: [''],
      symposium: ['', [Validators.required]],
      ambassadorName: ['', [Validators.required]],
      specialRequest: [''],
      cancelPolicy: ['', [Validators.required]],
      userAgreement: ['', [Validators.required]],
      event: ['', [Validators.required]],
    })
  }

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
    // localStorage.setItem('cart', JSON.stringify(cartObj));
    this._constantService.cartSubject.next(cartObj);
    this._router.navigateByUrl('/student/view-cart')
  }

  onSubmit(): void {
    if (!this.formGroup.valid) {
      alert("Please fill the all mandetory fileds");
      return;
    }
    let formData = this.formGroup.value;
    this.payload = {
      address: formData.address,
      ambassadorName: formData.ambassadorName,
      cancelPolicy: formData.cancelPolicy,
      companyName: formData.companyName,
      mcrNumber: formData.mcrNumber,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      alternateEmail: formData.alternateEmail,
      specialRequest: formData.specialRequest,
      symposium: formData.symposium,
      userAgreement: formData.userAgreement,
      event: formData.event,
    };
    console.log('payload', this, this.payload);
    this.serviceSubscription.push(
      this._liveEventService.eventRegistration(this.payload).subscribe(
        (res) => {
          console.log('res', res);
          if (res) {
            // this.template = true;
            if (this.firstDayEventDetail) {
              this.addCart([this.firstDayEventDetail]);
            } else if (this.secondDayEventDetail) {
              this.addCart([this.secondDayEventDetail]);
            } else if (this.bothDayEventDetail) {
              this.addCart([this.bothDayEventDetail])
            }
          }
        }, (err) => {
          console.log('err', err);
        })
    )
  }

  onEvent(event): void {
    console.log('event', event.target.value);
    let data = event.target.value;
    if (data === 'CEM') {
      this.firstDayEventDetail = this.eventDetails?.video[0];
      console.log('firstDayEventDetail', this.firstDayEventDetail);
      this.secondDayEventDetail = null;
      this.bothDayEventDetail = null;
    } else if (data === 'USG') {
      this.secondDayEventDetail = this.eventDetails?.video[1];
      console.log('secondDayEventDetail', this.secondDayEventDetail);
      this.firstDayEventDetail = null;
      this.bothDayEventDetail = null;
    }
    else if (data === 'CEM/USG') {
      this.bothDayEventDetail = this.eventDetails?.video;
      console.log('bothDayEventDetail', this.bothDayEventDetail);
      this.firstDayEventDetail = null;
      this.secondDayEventDetail = null;
    }

  }

}
