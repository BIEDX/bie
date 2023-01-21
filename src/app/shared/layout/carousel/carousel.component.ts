import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  products: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'One-stop solution',
      name2: "for radiology learning",
      description: 'Our mission is to empower radiologists and surgeons with state-of-the-art',
      description2: 'radiology knowledge for a deep and lasting impact on the last patient',
      image: '../../../../assets/image2/carousel1.jpeg',
    },
    {
      id: '1001',
      name: 'State-of-the-art',
      name2: 'with personalized attention',
      description: 'We focus on providing the state-of-the-art knowledge along with ',
      description2: 'a lot of personalized attention in order for you to grow faster',
      image: '../../../../assets/images/slider/slider-bg3.jpg',

    },
    {
      id: '1003',
      name: 'Sharing is caring',
      description: 'We trust that the more we share with the doctors,',
      description2: 'the more it will help the patients',
      image: '../../../../assets/image2/carousel3.gif',

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
