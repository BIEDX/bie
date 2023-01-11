import { Component, OnInit } from '@angular/core';
import { ProviderUserAuthService } from '../../../../core/providers/auth/provider-user-auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user: any = {};
  errorMessage: string = ''
  constructor(private userAuth: ProviderUserAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  signInHandler() {
    this.errorMessage = ''
    this.userAuth.userSignIn(this.user).subscribe(
      (res: any) => {
        if (res.header.code === 200) {
          this.userAuth.userStorage(res);
          if (res?.data?.role === 'admin') {
            this.router.navigateByUrl('/admin');
          } else if (res?.data?.role === 'student') {
            this.router.navigateByUrl('/student');
          } else if (res?.data?.role === 'teacher') {
            this.router.navigateByUrl('/teacher');
          }
        } else {
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
