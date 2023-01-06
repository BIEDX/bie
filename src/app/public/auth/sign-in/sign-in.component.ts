import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderUserAuthService } from 'src/app/core/providers/auth/provider-user-auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formGroup: FormGroup;
  user: any = {};
  errorMessage: string = ''
  constructor(
    private _formBuilder: FormBuilder,
    private userAuth: ProviderUserAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.formGroup = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  signInHandler() {
    if (!this.formGroup.valid) {
      return;
    }
    this.errorMessage = ''
    this.userAuth.userSignIn(this.user).subscribe(
      (res: any) => {
        if (res.header.code === 200) {
          console.log('res', res);
          this.userAuth.userStorage(res);
          this.router.navigateByUrl('/thank-you');
        } else {
          this.errorMessage = res.header.message
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
