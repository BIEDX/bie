import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formGroup = this._formBuilder.group({
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]]
    })
  }

  submit(): void {
    if (!this.formGroup.valid) {
      return;
    }

    let formData = this.formGroup.value;
  }

}
