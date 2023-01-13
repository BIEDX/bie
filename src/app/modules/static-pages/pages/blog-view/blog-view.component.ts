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
  patchFormValue: any;
  isEdit: boolean = false;
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
    this.serviceSubscription.push(
      this.blogService.getBlogById(this.blogId).subscribe(
        (data) => {
          this.blog = data;
        },
        (err) => {
          console.log(err);
        }
      )
    )
  }

  getReplyBlog(data): void {
    this.serviceSubscription.push(
      this.blogService.getReplyBlogs(data).subscribe(
        (res) => {
          this.replies = res;
        },
        (err) => {
          console.log('err', err);
        }
      )
    )
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
      blogId: this.blogId,
      name: formData.name,
      comment: formData.comment
    }
    if (this.patchFormValue?._id) {
      this.payload._id = this.patchFormValue?._id;
      this.update(this.payload);
    } else {
      this.save(this.payload);
    }
    console.log('payload', this.payload);
  }

  save(data): void {
    this.serviceSubscription.push(
      this.blogService.addBlogReply(data).subscribe(
        (res: any) => {
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

  update(data): void {
    this.serviceSubscription.push(
      this.blogService.updateBlogReply(data).subscribe(
        (res: any) => {
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

  onEdit(id): void {
    this.serviceSubscription.push(
      this.blogService.getReplyBlogsById(id).subscribe(
        (res) => {
          this.patchFormValue = res;
          console.log('patchFormValue', this.patchFormValue);
          this.patchForm();
        }, (err) => {
          console.log('err', err);
        })
    )

  }

  onDelete(id): void {
    this.serviceSubscription.push(
      this.blogService.deleteReplyBlogs(id).subscribe(
        (res: any) => {
          if (res?.statusCode == 200) {
            this.getReplyBlog(this.blogId);
          }
        },
        (err) => {
          console.log('err', err);
        })
    )
  }

  patchForm(): void {
    this.isEdit = true;
    this.formGroup.patchValue({
      name: this.patchFormValue.name ? this.patchFormValue.name : '',
      comment: this.patchFormValue.comment ? this.patchFormValue.comment : '',
    })
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }
}

