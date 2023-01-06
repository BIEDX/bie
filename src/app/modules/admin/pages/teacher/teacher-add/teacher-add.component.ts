import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/core/providers/apis/teacher.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss']
})
export class TeacherAddComponent {
  teacherFrom: FormGroup;
  errorResponse: any = null;
  btnMessage: string = ""

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private _route: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
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
