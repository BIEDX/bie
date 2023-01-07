import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlogComponent } from './list-blog/list-blog.component';

const routes: Routes = [
  
  {
    path: '',
    component: ListBlogComponent,
    children: [
      { path: '', component: ListBlogComponent },
      
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
