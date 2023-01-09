import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent, CoursesAddComponent, CoursesComponent, CoursesEditComponent, CoursesListComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '', redirectTo: 'list'
      },
      {
        path: 'add',
        component: CoursesAddComponent
      },
      {
        path: 'edit',
        component: CoursesEditComponent
      },
      {
        path: 'list',
        component: CoursesListComponent,
      },
      {
        path: 'details',
        component: CourseDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
