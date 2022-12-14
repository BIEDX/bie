import { Component, OnInit } from '@angular/core';
import { ProviderUserAuthService } from '../../../core/providers/auth/provider-user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'el-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  user:any={};
  constructor(private userAuth:ProviderUserAuthService, private router: Router,) { }

  ngOnInit(): void {
  }
  signupHandler(){
    console.log('user',this.user)
    this.userAuth.userSignUp(this.user).subscribe((res:any) => {
      this.router.navigateByUrl('/auth/sign-in');
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
