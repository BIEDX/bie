import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogComponent } from './blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: '', component:ListBlogComponent },
      {path:'view', component:SingleBlogComponent},
      {path:'new', component:AddBlogComponent}
      
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
