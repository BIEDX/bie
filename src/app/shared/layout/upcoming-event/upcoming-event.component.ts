import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.scss']
})
export class UpcomingEventComponent implements OnInit {
  responsiveOptions: any[] = [];
  products: any[] = [
    {
      name: 'BIE USG Symposium 2023',
      image: '../../../../assets/images/objective.jpg',
      price: 79,
      rating: 5,
      year:4,
      date:'Feb, 01 2023',
    },
    {
      name: 'BIE CEM Symposium 2023',
      image: '../../../../assets/images/objective1.webp',
      price: 79,
      rating: 5,
      year:4,
      date:'Feb, 01 2023',
    },
  ];
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
   }

  ngOnInit(): void {
  }

}
