import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogService } from 'src/app/core/providers/apis/blog.service';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  htmlContent = '';
  blog: any = {};
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
  constructor(private blogService: BlogService) {
    this.blog = {

    }
  }

  ngOnInit(): void {
  }
  createBlogHandler() {    
    const blogId:any=Guid.create();    
    const requestData={
      title:this.htmlContent,
      by:this.blog.by,
      date:this.blog.date,
      tag:this.blog.tag,
      blogId:blogId.value
    }
    console.log('requestData',requestData);
    this.blogService.createBlog(requestData).subscribe(
      (data) => {
        console.log(data);
      this.htmlContent='';
      this.blog={};
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
