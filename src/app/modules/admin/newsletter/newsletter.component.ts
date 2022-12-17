import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterService } from 'src/app/core/providers/apis/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  newslettersSubscriptions:any[] = [] 
  constructor(private newsLetterService: NewsletterService, private router: Router) { }

  ngOnInit(): void {
    this.getNewsLetterService();
  }

  getNewsLetterService(){
    this.newsLetterService.getNewsLetters().subscribe((res)=>{
      if(Array.isArray(res)) this.newslettersSubscriptions = res
    })
  }

  naviagteToUser(){
    this.router.navigateByUrl('/admin/users')
  }

}
