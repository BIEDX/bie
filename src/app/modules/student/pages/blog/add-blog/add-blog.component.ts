import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogService } from 'src/app/core/providers/apis/blog.service';
import { Guid } from "guid-typescript";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogInterface } from 'src/app/core/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  payload: BlogInterface;
  formGroup: FormGroup;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  constructor(
    private blogService: BlogService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }


  buildForm(): void {
    this.formGroup = this._formBuilder.group({
      title: ['', [Validators.required]],
      htmlContent: ['', [Validators.required]],
      createdBy: ['', [Validators.required]],
      date: ['', [Validators.required]],
      tag: ['', [Validators.required]],
    })
  }
  createBlogHandler() {
    const blogId: any = Guid.create();
    let formData = this.formGroup.value;
    this.payload = {
      title: formData.title,
      description: formData.htmlContent,
      by: formData.createdBy,
      date: formData.date,
      tag: formData.tag,
      blogId: blogId.value
    }
    console.log('requestData', this.payload);
    this.blogService.createBlog(this.payload).subscribe(
      (res) => {
        console.log(res);
        this._router.navigateByUrl('/student/blog/list');
      },
      (err) => {
        console.log('err', err)
      }
    )
  }
}
