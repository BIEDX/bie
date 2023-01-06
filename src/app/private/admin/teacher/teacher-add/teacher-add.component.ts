import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder,private teacherService: TeacherService){}

  ngOnInit(){
    this.createForm();
  }

  createForm(){
    this.teacherFrom = this.formBuilder.group({
      phone: ['', Validators.required],
      email: ['', Validators.email],
      name: ['', Validators.required],
      country: ['', Validators.required],
      affiliation: ['', Validators.required]
    })
  }

  signupHandler(){
    const formValues = this.teacherFrom.value
    this.teacherService.createTeacher(formValues).subscribe((res)=>{
      console.log(res)
    }, (error)=> console.log(error));
  }
}
