import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  newslettersSubscriptions: any[] = []
  constructor() { }
  ngOnInit(): void {
  }



  naviagteToUser() {
    // this.router.navigateByUrl('/admin/users')
  }

}
