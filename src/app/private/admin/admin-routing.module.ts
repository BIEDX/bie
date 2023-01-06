import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: "", redirectTo: "users"},
      { path: 'users', component: UsersComponent },
      { path: 'newsletter', component: NewsletterComponent },
      { path: "teacher", loadChildren: ()=> import("./pages/teacher/teacher.module").then((m)=> m.TeacherModule)}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
