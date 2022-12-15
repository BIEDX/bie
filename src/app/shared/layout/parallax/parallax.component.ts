import { Component, OnInit } from '@angular/core';
import { ProviderUserAuthService } from '../../../core/providers/auth/provider-user-auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'el-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  userForm:FormGroup;
  errorResponse: any = null

  constructor(private userAuth:ProviderUserAuthService, private router: Router, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
      name: ['', Validators.required],
      country: ['', Validators.required],
      affiliation: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {

  }

  signupHandler(){
    const value = this.userForm.value;
    console.log(value);
    this.userAuth.userSignUp(value).subscribe((res:any) => {
      console.log(res);
      if(res.header.code === 200){
        this.router.navigateByUrl('/auth/sign-in');
      } else {
        this.errorResponse = res;
      }
    }, err => {
      //this.appMessageService.createBasicNotification('red', 'Something went wrong');
    });
  }
}
