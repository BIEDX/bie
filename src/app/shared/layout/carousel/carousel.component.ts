import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  products: any[] = [
    {
      name: 'BIE USG Symposium 2023',
      image: '../../../../assets/image2/carousel1.jpeg',
    },
    {
      name: 'BIE CEM Symposium 2023',
      image: '../../../../assets/image2/carousel1.jpeg',
    },
  ];

  responsiveOptions: any[] = [];

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

  ngOnInit(): void { }
}
