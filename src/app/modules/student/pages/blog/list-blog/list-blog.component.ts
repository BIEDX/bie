import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/core/providers/apis/blog.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit {
  blogs: any[] = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(
      (data: any[]) => {
        console.log('data',data);
        this.blogs = data;
      },
      (err) => {
        console.log(err)
      }
    );
  }

}
