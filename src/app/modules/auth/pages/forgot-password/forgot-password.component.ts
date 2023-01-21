import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderUserAuthService } from 'src/app/core/providers/auth/provider-user-auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  user: any = {};
  errorMessage: string = ''
  courseId: string;
  eventId: string;
  passwordToggler: boolean;
  message: string = '';
  isError: boolean |undefined;
  constructor(private userAuth: ProviderUserAuthService,
    private router: Router,
    private _activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }
  forgotPasswordHandler() {
    this.errorMessage = ''
    this.userAuth.forgotPassword(this.user).subscribe(
      (res: any) => {
        if (res.message === 'Email Not Found.') {
          this.message = 'No such email was found'
          this.isError = true
        }
        else if (res.message === 'Password Changed Successfully.') {
          this.message = 'Password has been changed successfully'
          this.isError = false
        }
        console.log('password has been changed')

      }, err => {
        //this.appMessageService.createBasicNotification('red', 'Something went wrong');
      });
  }
}
