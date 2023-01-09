import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/core/providers/apis/teacher.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss']
})
export class TeacherDetailsComponent implements OnInit {
  teacherDetails: any;
  teacherId: string;
  payload: any = {};
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _teacherService: TeacherService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getId();
    this.getTeacher(this.teacherId);
  }

  getId(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.teacherId = params['id'];
      } catch (err) {
        console.log('err..');
      }
    });
  }

  getTeacher(id): void {
    this._teacherService.getTeachersData(id).subscribe((res) => {
      this.teacherDetails = res[0];
    }, (err) => {
      console.log('err', err);
    })
  }

  editTeacher(id): void {
    this._router.navigateByUrl("/admin/teacher/edit" + '?id=' + id);
  }

}
