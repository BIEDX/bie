import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeacherService } from 'src/app/core/providers/apis/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent {
  serviceSubscription: Subscription[] = [];
  teachers: any[] = [];

  constructor(private teacherService: TeacherService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTeachers()
  }

  getTeachers() {
    this.serviceSubscription.push(
      this.teacherService.getTeachers().subscribe((res) => {
        if (Array.isArray(res)) this.teachers = res;
      },
        (err) => {
          console.log('err', err);
        }
      )
    )
  }

  seeDetails(_id): void {
    this.router.navigateByUrl("/admin/teacher/details" + '?id=' + _id)
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }
}
