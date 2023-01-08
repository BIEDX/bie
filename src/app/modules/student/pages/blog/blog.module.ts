import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';


@NgModule({
  declarations: [
    BlogComponent,
    ListBlogComponent,
    ViewBlogComponent,
    AddBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
