import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent, StudentDashboardComponent, ViewCartComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: '', component: StudentDashboardComponent },
      { path: 'view-cart', component: ViewCartComponent },
      { path: "blog", loadChildren: () => import("./pages/blog/blog.module").then((m) => m.BlogModule) },
      { path: "course", loadChildren: () => import("./pages/courses/courses.module").then((m) => m.CoursesModule) }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
