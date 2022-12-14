import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProviderUserAuthService } from '../../../../core/providers/auth/provider-user-auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  //user:any={};
  // constructor(private userAuth:ProviderUserAuthService, private router: Router,) { }
  constructor(){}

  ngOnInit(): void {
  }
  // signupHandler(){
  //   console.log('user',this.user)
  //   this.userAuth.userSignUp(this.user).subscribe((res:any) => {
  //     this.router.navigateByUrl('/student');
  //     // if (res.header.code === 200) {
  //     //   this.router.navigateByUrl('/b2b/active-account');
  //     //   this.appMessageService.createBasicNotification('green', res.header.message);
  //     // } else {
  //     //   this.appMessageService.createBasicNotification('blue', res.header.message);
  //     // }
  //   }, err => {
  //     //this.appMessageService.createBasicNotification('red', 'Something went wrong');
  //   });
  // }
}
