import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { UsersComponent } from './pages/users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';


@NgModule({
  declarations: [
    AdminComponent,
    NewsletterComponent,
    UsersComponent,
    TeacherComponent,
    CoursesComponent,
    AdminDashboardComponent,
    CourseDetailsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
