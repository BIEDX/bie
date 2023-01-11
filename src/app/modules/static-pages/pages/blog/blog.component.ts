import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/core/providers/apis/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: any[] = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe(
      (data: any[]) => {
        console.log('data', data);
        this.blogs = data;
      },
      (err) => {
        console.log(err)
      }
    );
  }

}
