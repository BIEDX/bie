import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogReplyInterface } from 'src/app/core/constants';
import { BlogService } from 'src/app/core/providers/apis/blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  blogId: string = ''
  blog: any = {}
  replies: any;
  formGroup: FormGroup;
  payload: BlogReplyInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.blogId = params['blogId'];
      this.getBlog();
      this.getReplyBlog(this.blogId);
    });
    this.buildForm();
  }

  getBlog(): void {
    this.blogService.getBlogById(this.blogId).subscribe(
      (data) => {
        console.log(data)
        this.blog = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getReplyBlog(data): void {
    this.blogService.getReplyBlogs(data).subscribe(
      (res) => {
        console.log(res)
        this.replies = res;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  buildForm(): void {
    this.formGroup = this._formBuilder.group({
      name: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    })
  }

  onSubmit(): void {
    if (!this.formGroup.valid) {
      alert('Please fill the mandetory fileds')
      return;
    }
    let formData = this.formGroup.value;
    this.payload = {
      name: formData.name,
      comment: formData.comment
    }
    console.log('payload', this.payload);

    this.serviceSubscription.push(
      this.blogService.addBlogReply(this.payload).subscribe(
        (res: any) => {
          console.log('res', res);
          if (res?.statusCode == 200) {
            this.formGroup.reset();
            this.getReplyBlog(this.blogId);
          }
        },
        (err) => {
          console.log('err', err);
        })
    )
  }

}

