import { Component } from '@angular/core';
import { TeacherService } from 'src/app/core/providers/apis/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent {
  teachers: any[] = [];

  constructor(private teacherService: TeacherService){}

  ngOnInit(){
    this.getTeachers()
  }

  getTeachers(){
    this.teacherService.getTeachers().subscribe((res)=>{
      console.log("teachers", res);
      if(Array.isArray(res)) this.teachers = res;
    })
  }
}
