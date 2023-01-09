import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeacherInterface } from 'src/app/core/constants';
import { TeacherService } from 'src/app/core/providers/apis/teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
})
export class TeacherFormComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  teacherFrom: FormGroup;
  errorResponse: any = null;
  btnMessage: string = ""
  isEdit: boolean = false;
  patchFormValue: any;
  payload: TeacherInterface;
  @Input() set data(value) {
    this.patchFormValue = value;
  };

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.patchFormValue && this.patchFormValue.hasOwnProperty('_id')) {
        this.isEdit = true;
        this.patchForm();
      }
    }, 700);
  }


  patchForm(): void {
    this.teacherFrom.patchValue({
      phone: this.patchFormValue.phone ? this.patchFormValue.phone : '',
      email: this.patchFormValue.email ? this.patchFormValue.email : '',
      name: this.patchFormValue.name ? this.patchFormValue.name : '',
      country: this.patchFormValue.country ? this.patchFormValue.country : '',
      affiliation: this.patchFormValue.affiliation ? this.patchFormValue.affiliation : '',
    })
  }

  createForm(): void {
    this.teacherFrom = this.formBuilder.group({
      phone: ['', Validators.required],
      email: ['', Validators.email],
      name: ['', Validators.required],
      country: ['', Validators.required],
      affiliation: ['', Validators.required]
    })
  }

  signupHandler() {
    if (!this.teacherFrom.valid) {
      return;
    }
    const formValues = this.teacherFrom.value;
    this.payload = {
      phone: formValues.phone,
      email: formValues.email,
      name: formValues.name,
      country: formValues.country,
      affiliation: formValues.affiliation
    }

    if (this.patchFormValue?._id) {
      this.payload.id = this.patchFormValue?._id;
      console.log('payload', this.payload);
      this.createTeacher(this.payload)
    } else {
      console.log('payload', this.payload);
      this.createTeacher(this.payload);
    }


  }

  createTeacher(payload) {
    this.serviceSubscription.push(
      this.teacherService.createTeacher(payload).subscribe((res) => {
        console.log(res)
        this._route.navigateByUrl('/admin/teacher/list')
      }, (error) => console.log(error))
    )
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }

}
