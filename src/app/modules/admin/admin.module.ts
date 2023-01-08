import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [
    AdminComponent,
    NewsletterComponent,
    UsersComponent,
    TeacherComponent,
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
