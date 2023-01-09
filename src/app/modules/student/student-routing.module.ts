import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { StudentComponent } from './student.component';

const routes: Routes = [

  {
    path: '',
    component: StudentComponent,
    children: [
      { path: '', component: StudentDashboardComponent },
      { path: "blog", loadChildren: () => import("./pages/blog/blog.module").then((m) => m.BlogModule) }
      
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
