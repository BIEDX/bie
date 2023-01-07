import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {
  responsiveOptions: any[] = [];
  carousel: any[];

  constructor() {
    
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    this.carousel = [
      {
        image: '../../../../assets/images/blog/blog2.jpg',
       
        
      },
      {
        image: '../../../../assets/images/blog/blog1.jpg',
       
        
      },
      {
        image: '../../../../assets/images/blog/blog1.jpg',

        
      },
      {
        image: '../../../../assets/images/blog/blog3.jpg',
      
      },
    ];
   }

  ngOnInit(): void {
  }

}
