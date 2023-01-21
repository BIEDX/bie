import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProviderUserAuthService } from '../../../core/providers/auth/provider-user-auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COUNTRIES, dial_SG } from 'src/app/core/constants';

@Component({
  selector: 'el-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  userForm: FormGroup;
  errorResponse: any = null;
  btnMessage: string = "";
  passwordToggler: boolean;
  countries = COUNTRIES;
  iso2: string = dial_SG.countryName;
  @ViewChild('errorMessageTemp', { static: false }) errorMessageTem: ElementRef<HTMLElement>;

  constructor(private userAuth: ProviderUserAuthService, private router: Router, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      affiliation: ['', Validators.required],
      password: ['', Validators.required],
      country_flag: ['']
    })
  }

  ngOnInit(): void {
    this.passwordToggler = true;
  }

  passwordTogglerFun() {
    this.passwordToggler = !this.passwordToggler;
  }

  onLoadCountryChange(event) {
    setTimeout(() => {
      event.setCountry(this.iso2);
      let data: any = event.hasOwnProperty('s') ? event.s : event;
      if (data && data.hasOwnProperty('dialCode')) {
        data.dial_code = data.dialCode;
      }
      this.userForm.controls['country_flag'].patchValue(data);
    }, 500)
  }

  filterCountryFlag(data: any) {
    let object = {
      name: dial_SG.countryNameFull,
      iso2: dial_SG.countryName,
      dial_code: dial_SG.dialCode,
    };
    if (data) {
      let checkdialcode = data.hasOwnProperty('dial_code') ? true : false;
      checkdialcode = checkdialcode ? data.dial_code.replace('+', '') : false;
      object.name = data.hasOwnProperty('name') ? data.name : object.name;
      object.iso2 = data.hasOwnProperty('iso2') ? data.iso2 : object.iso2;
      object.dial_code = checkdialcode ? '+' + checkdialcode : object.dial_code;
    }
    return object;
  }

  onCountryChange(event) {
    let data = event.hasOwnProperty('s') ? event.s : event;
    if (data && data.hasOwnProperty('dialCode')) {
      data.dial_code = data.dialCode;
    }
    this.userForm.controls['country_flag'].patchValue(data);
    this.iso2 = data.iso2;
  }


  signupHandler() {
    const formData = this.userForm.value;
    this.btnMessage = "";
    this.errorResponse = null;
    const countryAndMobile = this.filterCountryFlag(formData.country_flag);
    let payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: countryAndMobile.dial_code + formData.phone,
      country: formData.country,
      password: formData.password,
      country_flag: countryAndMobile.dial_code,
    }
    this.userAuth.userSignUp(payload).subscribe((res: any) => {
      if (res.header.code === 200) {
        this.router.navigateByUrl('/auth/sign-in');
      } else {
        this.btnMessage = res.header.message;
        this.errorResponse = res;
        setTimeout(() => {
          this.btnMessage = ''
        }, 3000)
      }
    }, err => {
      //this.appMessageService.createBasicNotification('red', 'Something went wrong');
    });
  }
}
