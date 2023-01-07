import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { BlogComponent } from './blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [
    AddBlogComponent,
    ListBlogComponent,
    BlogComponent,
    SingleBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CarouselModule
  ]
})
export class BlogModule { }
