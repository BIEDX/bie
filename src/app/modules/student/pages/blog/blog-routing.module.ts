import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogComponent } from './blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: "", redirectTo: "list" },
      { path: 'list', component: ListBlogComponent },
      { path: 'add', component: AddBlogComponent },
      { path: 'view', component: ViewBlogComponent },
      // { path: 'newsletter', component: NewsletterComponent },
      // { path: "teacher", loadChildren: () => import("./pages/teacher/teacher.module").then((m) => m.TeacherModule) }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
