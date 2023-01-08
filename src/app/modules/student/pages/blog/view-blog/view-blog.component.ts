import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BlogService } from 'src/app/core/providers/apis/blog.service';
@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  blogId: string = ''
  blog:any={}
  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.blogId = params['blogId'];
      console.log('Url Id: ', this.blogId);
    });

    this.blogService.getBlogById(this.blogId).subscribe(
      (data) => {
        console.log(data)
        this.blog=data;
      },
      (err) => {
        console.log(err);
      }
    );

  }

}
