import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherAddComponent, TeacherComponent, TeacherDetailsComponent, TeacherEditComponent, TeacherListComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      {
        path: '', redirectTo: 'list'
      },
      {
        path: 'add',
        component: TeacherAddComponent
      },
      {
        path: 'edit',
        component: TeacherEditComponent
      },
      {
        path: 'list',
        component: TeacherListComponent,
      },
      {
        path: 'details',
        component: TeacherDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
