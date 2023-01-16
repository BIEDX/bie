import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '.';
import { AdminComponent } from './admin.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'newsletter', component: NewsletterComponent },
      { path: 'courses', loadChildren: () => import("./pages/courses/courses.module").then((m) => m.CoursesModule) },
      { path: "teacher", loadChildren: () => import("./pages/teacher/teacher.module").then((m) => m.TeacherModule) },
      { path: "live-event", loadChildren: () => import("./pages/live-event/live-event.module").then((m) => m.LiveEventModule) }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
