import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: '', component:ListBlogComponent },
      
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
