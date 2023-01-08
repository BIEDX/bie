import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/core/providers/apis/teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
})
export class TeacherFormComponent implements OnInit {
  teacherFrom: FormGroup;
  errorResponse: any = null;
  btnMessage: string = ""
  isEdit: boolean = false;
  patchFormValue: any;
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
      if (this.patchFormValue && this.patchFormValue.hasOwnProperty('id')) {
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
    const formValues = this.teacherFrom.value
    this.teacherService.createTeacher(formValues).subscribe((res) => {
      console.log(res)
      this._route.navigateByUrl('/admin/teacher/list')
    }, (error) => console.log(error));
  }
}
