import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlogComponent } from '../blog/list-blog/list-blog.component';



const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"list-blog"
  },
  {
    path:"list-blog",
    component:ListBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
