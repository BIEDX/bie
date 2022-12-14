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
      name: 'Creative Template for',
      description: 'Our mission is to empower clients, colleagues, and communities to achieve aspirations while building lasting, caring relationships',
      image: '../../../../assets/images/slider/slider-bg1.jpg',
      price: 65,
      category: 'Education',
      subCategory: ' & Courses Website',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
     
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Responsive Template for',
      description: 'Our mission is to empower clients, colleagues, and communities to achieve aspirations while building lasting, caring relationships.',
      image: '../../../../assets/images/slider/slider-bg2.jpg',
      price: 72,
      category: 'Education',
      subCategory: ' & Courses Website',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
     
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Perfect Template for',
      description: 'Our mission is to empower clients, colleagues, and communities to achieve aspirations while building lasting, caring relationships.',
      image: '../../../../assets/images/slider/slider-bg3.jpg',
      price: 79,
      category: 'Educational',
      subCategory: ' & Courses Website',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
     
    },
    // {
    //   id: '1003',
    //   code: '244wgerg2',
    //   name: 'Blue T-Shirt',
    //   description: 'Product Description',
    //   image: 'blue-t-shirt.jpg',
    //   price: 29,
    //   category: 'Clothing',
    //   quantity: 25,
    //   inventoryStatus: 'INSTOCK',
    //   rating: 5,
    //   images:'../../../../assets/images/slider/slider-bg1.jpg'
    // },
    // {
    //   id: '1004',
    //   code: 'h456wer53',
    //   name: 'Bracelet',
    //   description: 'Product Description',
    //   image: 'bracelet.jpg',
    //   price: 15,
    //   category: 'Accessories',
    //   quantity: 73,
    //   inventoryStatus: 'INSTOCK',
    //   rating: 4,
    //   images:'../../../../assets/images/slider/slider-bg2.jpg'
    // },
    // {
    //   id: '1005',
    //   code: 'av2231fwg',
    //   name: 'Brown Purse',
    //   description: 'Product Description',
    //   image: 'brown-purse.jpg',
    //   price: 120,
    //   category: 'Accessories',
    //   quantity: 0,
    //   inventoryStatus: 'OUTOFSTOCK',
    //   rating: 4,
    //   images:'../../../../assets/images/slider/slider-bg3.jpg'
    // },
    // {
    //   id: '1006',
    //   code: 'bib36pfvm',
    //   name: 'Chakra Bracelet',
    //   description: 'Product Description',
    //   image: 'chakra-bracelet.jpg',
    //   price: 32,
    //   category: 'Accessories',
    //   quantity: 5,
    //   inventoryStatus: 'LOWSTOCK',
    //   rating: 3,
    //   images:'../../../../assets/images/slider/slider-bg1.jpg'
    // },
    // {
    //   id: '1007',
    //   code: 'mbvjkgip5',
    //   name: 'Galaxy Earrings',
    //   description: 'Product Description',
    //   image: 'galaxy-earrings.jpg',
    //   price: 34,
    //   category: 'Accessories',
    //   quantity: 23,
    //   inventoryStatus: 'INSTOCK',
    //   rating: 5,
    //   images:'../../../../assets/images/slider/slider-bg2.jpg'
    // },
    // {
    //   id: '1008',
    //   code: 'vbb124btr',
    //   name: 'Game Controller',
    //   description: 'Product Description',
    //   image: 'game-controller.jpg',
    //   price: 99,
    //   category: 'Electronics',
    //   quantity: 2,
    //   inventoryStatus: 'LOWSTOCK',
    //   rating: 4,
    //   images:'../../../../assets/images/slider/slider-bg3.jpg'
    // },
    // {
    //   id: '1009',
    //   code: 'cm230f032',
    //   name: 'Gaming Set',
    //   description: 'Product Description',
    //   image: 'gaming-set.jpg',
    //   price: 299,
    //   category: 'Electronics',
    //   quantity: 63,
    //   inventoryStatus: 'INSTOCK',
    //   rating: 3,
    //   images:'../../../../assets/images/slider/slider-bg1.jpg'
    // },
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
