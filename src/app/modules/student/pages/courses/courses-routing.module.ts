import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent, CourseListComponent, CoursesComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '', redirectTo: 'list'
      },
      {
        path: 'list',
        component: CourseListComponent,
      },
      {
        path: 'details',
        component: CourseDetailsComponent,
      },
      {
        path: 'details/:id',
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
