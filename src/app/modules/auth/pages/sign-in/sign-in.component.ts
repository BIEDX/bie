import { Component, OnInit } from '@angular/core';
import { ProviderUserAuthService } from '../../../../core/providers/auth/provider-user-auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user:any={};
  constructor(private userAuth:ProviderUserAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  signInHandler(){
    this.userAuth.userSignIn(this.user).subscribe(
      (res:any) => {
        console.log('res',res);
        this.userAuth.userStorage(res);
        this.router.navigateByUrl('/student');
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
