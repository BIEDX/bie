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
      id: '1000',
      code: 'f230fh0g3',
      name: 'Mammography Bootcamp with AI',
      description: 'BIE Mammography Bootcamp with AI is a 2-day hands-on workshop designed to help radiologists, radiology fellows, and trainees to learn in-depth mammography reporting and the use of artificial intelligence in mammography through comprehensive case practice and live discussions with experts.',
      image: '../../../../assets/image2/events/1617event.jpg',
      price: 65,
      category: 'Education',
      subCategory: ' & Courses Website',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      year:4,
      join: false,
      date:'16-17 December 2022',
      location:'Singapore',
      link: "https://breastimagingessentials.com/bie-grand-2022-home/bie-mb-2022/"
    },
    {
      id: '1002',
      code: 'nvklal433',
      name: 'Hands-on Breast Intervention Workshop',
      description: 'BIE Hands-on Breast Intervention Workshop is a 1-day hands-on program designed to help radiologists, radiology fellows, and trainees to learn in-depth Breast intervention procedures such as MR-guided biopsy, US-guided biopsy, and stereo biopsy through comprehensive training, practice, and live discussions with international experts.',
      image: '../../../../assets/image2/events/18event.jpg',
      price: 72,
      category: 'Education',
      subCategory: ' & Courses Website',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
      year:2,
      join: false,
      date:'18 December 2022',
      location: "Singapore",
      link: "https://breastimagingessentials.com/bie-grand-2022-home/bie-grand-2022-intervention-workshop/"
    },
    {
      id: '1003',
      code: 'nvklal433',
      name: 'Intensive MRI Breast Reading Course',
      description: 'IMBRC 2022 (Intensive MRI Breast Reading Course) is BIE’s flagship MRI Breast workshop that is revered by radiologists globally. It is a 2 day hands-on intensive program designed to help radiologists, radiology fellows, and trainees to learn in-depth MRI Breast reporting through comprehensive case practice and live discussions with experts.',
      image: '../../../../assets/image2/carousel1.jpeg',
      price: 72,
      category: 'Education',
      subCategory: ' & Courses Website',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
      year:2,
      join: false,
      date:'19-20 December 2022',
      location: "Singapore",
      link: "https://breastimagingessentials.com/bie-grand-2022-home/bie-grand-2022-mri-workshop/"
    },
    {
      name: 'BIE USG Symposium 2023',
      image: '../../../../assets/images/objective.jpg',
      price: 79,
      join:true,
      date:'Feb, 01 2023',
    },
    {
      name: 'BIE CEM Symposium 2023',
      image: '../../../../assets/images/objective1.webp',
      price: 79,
      join:true,
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
