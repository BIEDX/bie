import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderUserAuthService } from 'src/app/core/providers/auth/provider-user-auth.service';
// import { Router } from '@angular/router';
// import { ProviderUserAuthService } from '../../../../core/providers/auth/provider-user-auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userForm:FormGroup;
  errorResponse: any = null;
  btnMessage: string = ""
  @ViewChild('errorMessageTemp', { static: false} ) errorMessageTem: ElementRef<HTMLElement>;

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
    this.btnMessage = "";
    this.errorResponse = null;
    this.userAuth.userSignUp(value).subscribe((res:any) => {
      if(res.header.code === 200){
        this.router.navigateByUrl('/auth/sign-in');
      } else {
        this.btnMessage = res.header.message;
        this.errorResponse = res;
        setTimeout(()=>{
          this.btnMessage = ''
        }, 3000)
      }
    }, err => {
      //this.appMessageService.createBasicNotification('red', 'Something went wrong');
    });
  }
}
