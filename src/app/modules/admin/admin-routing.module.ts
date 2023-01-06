import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent, CoursesComponent } from '.';
import { AdminComponent } from './admin.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'course-details', component: CourseDetailsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'newsletter', component: NewsletterComponent },
      { path: "teacher", loadChildren: () => import("./pages/teacher/teacher.module").then((m) => m.TeacherModule) }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
