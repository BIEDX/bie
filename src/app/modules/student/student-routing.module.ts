import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent, StudentDashboardComponent, UsgCemComponent, ViewCartComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: '', component: StudentDashboardComponent },
      { path: 'usg-cem', component: UsgCemComponent },
      { path: 'view-cart', component: ViewCartComponent },
      { path: "blog", loadChildren: () => import("./pages/blog/blog.module").then((m) => m.BlogModule) },
      { path: "course", loadChildren: () => import("./pages/courses/courses.module").then((m) => m.CoursesModule) },
      { path: "live-event", loadChildren: () => import("./pages/live-event/live-event.module").then((m) => m.LiveEventModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
