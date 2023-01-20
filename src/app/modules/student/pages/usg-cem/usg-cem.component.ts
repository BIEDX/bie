import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usg-cem',
  templateUrl: './usg-cem.component.html',
  styleUrls: ['./usg-cem.component.scss']
})
export class UsgCemComponent implements OnInit {
  responsiveOptions: any[] = [];
  products: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Dr. Ramesh Danovani',
      description: `This is a very comprehensive and intensive course with lots of materials for radiologists aspiring to learn I breast MRI in their practice; one of
       its kind in the region. There was a wide range of...`,
      image: '../../../../assets/image2/testimonials/1.png',
      price: 65,
      location: 'Singapore',
      subCategory: '',
      quantity: 24,
      inventoryStatus: '',
      rating: 5,
      year: 4

    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Dr. Ma. Theresa Buenaflor',
      description: `The Breast MRI course by Dr. Niketa is a supercharged version with much-needed multimodality as well as radiologic-pathologic correlation...`,
      image: '../../../../assets/image2/testimonials/2.png',
      price: 72,
      location: 'Philippines',
      subCategory: ' & Courses Website',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
      year: 2
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Dr. Saloni Desai',
      description: `I had an opportunity to attend this truly intensive and interactive breast MRI course in Singapore. It's was very well conducted with excellent lectures and case discussions by...`,
      image: '../../../../assets/image2/testimonials/5.png',
      price: 79,
      location: 'Educational',
      subCategory: ' & Courses Website',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
      year: 3
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'DR. Maisie M.E. Johan',
      description: `I thank Dr. Niketa for organizing the workshop The faculty was very sincere and helpful to usand...`,
      image: '../../../../assets/image2/testimonials/xn.png',
      price: 29,
      location: 'Indonesia',
      subCategory: ' & Courses Website',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      year: 1
      // images:'../../../../assets/images/slider/slider-bg1.jpg'
    },
    {
      id: '1004',
      code: 'h456wer53',
      name: 'Dr. Towhida Khan',
      description: `This experience was truly an amazing learning experience for use in my daily practice...`,
      image: '../../../../assets/image2/testimonials/4.png',
      price: 15,
      location: 'Bangladesh',
      subCategory: ' & Courses Website',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 4,
      year: 4
      // images:'../../../../assets/images/slider/slider-bg2.jpg'
    },
    {
      id: '1005',
      code: 'av2231fwg',
      name: 'Dr. Noree Jane Lastrilla',
      description: `The IMBRC was awsome! It covered a whole range of topics which I will be able to use in my daily practice - from Basics to Advance...`,
      image: '../../../../assets/image2/testimonials/nori.png',
      price: 120,
      location: 'Philippines',
      subCategory: ' & Courses Website',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4,
      year: 3
      // images:'../../../../assets/images/slider/slider-bg3.jpg'
    },
  ];
  eventId: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
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
    this.getId();
  }

  getId(): void {
    if (this._activatedRoute.snapshot.paramMap.get('id')) {
      this.eventId = this._activatedRoute.snapshot.paramMap.get('id');
    } else {
      this._activatedRoute.queryParams.subscribe((res) => {
        if (res['eid']) {
          this.eventId = res['eid'];
        } else {
          this.eventId = '63c4ed418d164061ebd476dc'
        }
      })
    }
  }

  navigate(): void {
    this._router.navigateByUrl('/student/live-event/details/' + this.eventId);
  }
}
