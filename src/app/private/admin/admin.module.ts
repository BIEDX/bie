import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { TeacherModule } from './pages/teacher/teacher.module';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [
    AdminComponent,
    NewsletterComponent,
    UsersComponent,
    CoursesComponent,
    AdminDashboardComponent,
  ],
  imports: [
    TeacherModule,
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
