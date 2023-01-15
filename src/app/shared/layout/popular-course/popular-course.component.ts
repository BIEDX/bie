import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'el-popular-course',
  templateUrl: './popular-course.component.html',
  styleUrls: ['./popular-course.component.scss']
})
export class PopularCourseComponent implements OnInit {
  responsiveOptions: any[] = [];
  products: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      category: 'Mammography with Artificial Intelligence',
      description: 'Our mission is to empower clients, colleagues, and communities to achieve aspirations while building lasting, caring relationships',
      image: '../../../../assets/images/course/course1.jpg',
      price: 65,
      name: '',
      subCategory: ' & Courses Website',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      year:4

    },
    {
      id: '1001',
      code: 'nvklal433',
      category: 'Intensive MRI Breast Reading Course',
      description: '',
      image: '../../../../assets/images/course/course2.jpg',
      price: 72,
      name: '',
      subCategory: ' & Courses Website',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
      year:2
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      category: 'Hands-on Breast Intervention Workshops',
      description: '',
      image: '../../../../assets/images/course/course3.jpg',
      price: 79,
      name: '',
      subCategory: ' & Courses Website',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
      year:3
    },
    {
      id: '1003',
      code: '244wgerg2',
      category: 'Breast Imaging: Back to Basics',
      description: 'Product Description',
      image: '../../../../assets/images/course/course5.jpg',
      price: 29,
      name: '',
      subCategory: ' & Courses Website',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      year:1
     // images:'../../../../assets/images/slider/slider-bg1.jpg'
    },
    {
      id: '1004',
      code: 'h456wer53',
      name: '',
      description: 'Product Description',
      image: '../../../../assets/images/course/course1.jpg',
      price: 15,
      category: 'Advances in Breast Imaging',
      subCategory: ' & Courses Website',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 4,
      year:4
     // images:'../../../../assets/images/slider/slider-bg2.jpg'
    },
    {
      id: '1005',
      code: 'av2231fwg',
      category: 'Clinical Breast Radiology',
      description: 'Product Description',
      image: '../../../../assets/images/course/course2.jpg',
      price: 120,
      name: '',
      subCategory: ' & Courses Website',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4,
      year:3
     // images:'../../../../assets/images/slider/slider-bg3.jpg'
    },

  ];
  constructor(private router :Router) {
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
  navigateToThankYou(){
     this.router.navigate(['/thank-you']);
  }

}
