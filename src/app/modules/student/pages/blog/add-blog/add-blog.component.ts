import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogService } from 'src/app/core/providers/apis/blog.service';
import { Guid } from "guid-typescript";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  htmlContent = '';
  blog: any = {};
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
  constructor(private blogService: BlogService,
    private _formBuilder: FormBuilder
  ) {
    this.blog = {

    }
  }

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
      id: ['', [Validators.required]],
    })
  }
  createBlogHandler() {
    const blogId: any = Guid.create();
    let formData = this.formGroup.value;
    const requestData = {
      title: formData.title,
      description: formData.htmlContent,
      by: formData.createdBy,
      date: formData.date,
      tag: formData.tag,
      blogId: formData.id
    }
    console.log('requestData', requestData);
    this.blogService.createBlog(requestData).subscribe(
      (data) => {
        console.log(data);
        this.htmlContent = '';
        this.blog = {};
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
