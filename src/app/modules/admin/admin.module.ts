import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeacherModule } from './teacher/teacher.module';


@NgModule({
  declarations: [
    AdminComponent,
    NewsletterComponent,
    UsersComponent,
  ],
  imports: [
    TeacherModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
