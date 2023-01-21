import { Component, OnInit } from '@angular/core';
import { ProviderUserAuthService } from '../../../../core/providers/auth/provider-user-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user: any = {};
  errorMessage: string = ''
  courseId: string;
  eventId: string;
  passwordToggler: boolean;
  message:string='';
  isError:boolean | undefined
  constructor(
    private userAuth: ProviderUserAuthService,
    private router: Router,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.passwordToggler = true;
    this.getId();
  }

  getId(): void {
    if (this._activatedRoute.snapshot.paramMap.get('id')) {
      this.courseId = this._activatedRoute.snapshot.paramMap.get('id');
      console.log('courseId', this.courseId);
    } else {
      this._activatedRoute.queryParams.subscribe((res) => {
        if (res['eid']) {
          this.eventId = res['eid'];
        } else {
          this.eventId = '63c4ed418d164061ebd476dc'
        }
        console.log('eventId', this.eventId);
      })
    }
  }

  passwordTogglerFun() {
    this.passwordToggler = !this.passwordToggler;
  }

  signInHandler() {
    this.errorMessage=undefined;
    this.userAuth.userSignIn(this.user).subscribe(
      (res: any) => {
        if (res.header.code === 200) {
          this.userAuth.userStorage(res);
          if (res?.data?.role === 'admin') {
            this.router.navigateByUrl('/admin');
          } else if (res?.data?.role === 'student' && this.courseId) {
            this.router.navigateByUrl('/student/course/details/' + this.courseId);
          }
          else if (res?.data?.role === 'student' && this.eventId) {
            this.router.navigateByUrl('/student/usg-cem');
          }
          else if (res?.data?.role === 'student') {
            this.router.navigateByUrl('/student');
          } else if (res?.data?.role === 'teacher') {
            this.router.navigateByUrl('/teacher');
          }
        } else if(res.header.code === 401) {
          this.errorMessage = res.header.message ? res.header.message : 'Invalid Credentials '
        }
        // if (res.header.code === 200) {
        //   this.router.navigateByUrl('/b2b/active-account');
        //   this.appMessageService.createBasicNotification('green', res.header.message);
        // } else {
        //   this.appMessageService.createBasicNotification('blue', res.header.message);
        // }
      }, err => {
        //this.appMessageService.createBasicNotification('red', 'Something went wrong');
      });
  }
}
