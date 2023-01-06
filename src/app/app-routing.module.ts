import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./private/static-pages/static-pages.module').then((m) => m.StaticModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./public/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./private/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./private/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
