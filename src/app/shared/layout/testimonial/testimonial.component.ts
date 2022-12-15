import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'el-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  responsiveOptions: any[] = [];
  products: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Dr. Ramesh Danovani',
      description: `This is a very comprehensive and intensive course with lots of materials for radiologists aspiring to learn
I breast MRI in their practice; one of
its kind in the region. There was a wide range of clinical material illustrating the different uses of breast MRI using a very interactive platform.
Definitely useful for those starting out or those who wish to learn more about the practical uses of modality. Certainly a course highly recommended for any radiologists practicing breast imaging. Well done Dr. Niketa and team for this well organized course.`,
      image: '../../../../assets/image2/testimonials/1.png',
      price: 65,
      location: 'Singapore',
      subCategory: '',
      quantity: 24,
      inventoryStatus: '',
      rating: 5,
      year:4
     
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Dr. Ma. Theresa Buenaflor',
      description: `The Breast MRI course by Dr. Niketa is a supercharged version with much-needed multimodality as well as radiologic-pathologic correlation.
      More importantly, Dr. Niketa and Dr. Ramesh have been accommodating in giving real-time feedback and persoal interaction. It vastly helped in accelerating the learning curve and makes it less intimidating. Thank you for offering this course and making it accessible. Whether you are a novice radiologist with an interest in breast imaging or practicing for many years, this course will equip you well.`,
      image: '../../../../assets/image2/testimonials/2.png',
      price: 72,
      location: 'Philippines',
      subCategory: ' & Courses Website',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
      year:2
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Dr. Saloni Desai',
      description: `I had an opportunity to attend this truly intensive and interactive breast MRI course in Singapore. It's was very well conducted with excellent lectures and case discussions by Dr. Supriya and Dr. Niketa and all the other faculty members. Personalized workstations and limited participants from all over the world, further added to the experience. A lot of course material was also provided to carry back to home and what's more is a special Whatsaap group of MRI breast where everyone is so helpful with solving cases and sharing cases. Highly recommend the course.`,
      image: '../../../../assets/image2/testimonials/5.png',
      price: 79,
      location: 'Educational',
      subCategory: ' & Courses Website',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
      year:3
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'DR. Maisie M.E. Johan',
      description: `I thank Dr. Niketa for organizing the workshop. I got most of what I aimed for. The faculty was very sincere and helpful to usand gave personalized attention to us. They even helped me with some cases I brought from back home. I recommend other radiologists to join to join the courses as it is good value.`,
      image: '../../../../assets/image2/testimonials/xn.png',
      price: 29,
      location: 'Indonesia',
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
      name: 'Dr. Towhida Khan',
      description: `This experience was truly an amazing learning experience for me. I've learnt a lot about Breast MRI. This experience will immensely broaden my understanding and help me contribute better to my field.`,
      image: '../../../../assets/image2/testimonials/4.png',
      price: 15,
      location: 'Bangladesh',
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
      name: 'Dr. Noree Jane Lastrilla',
      description: `The IMBRC was awsome! It covered a whole range of topics which I will be able to use in my daily practice - from Basics to Advance MRI. It was also wonderful that Dr. Niketa and Dr. Ramesh made reading Breast MRI easy, simple and concise. Even though the course was only for 2 days, I learned so much from it. I will definitely recommend this to anyone who is practicing Breast Imaging because thay will greatly benefit from it. I hope the BIE team can bring this course to other countries so they can share the knowledge to more people.`,
      image: '../../../../assets/image2/testimonials/nori.png',
      price: 120,
      location: 'Philippines',
      subCategory: ' & Courses Website',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4,
      year:3
     // images:'../../../../assets/images/slider/slider-bg3.jpg'
    },
    {
      id: '1006',
      code: 'bib36pfvm',
      name: 'Dr. Vish Reynolds',
      description: 'Excellent choice of cases. I attended in Singapore. Learned a lot, gained confidence in reading MRI breast. Learned MRI biopsy technique. Nice and friendly approach by the faculty Give you the freedom to ask all the problems which you may have.',
      image: '../../../../assets/images/course/course2.jpg',
      price: 32,
      location: 'Singapore',
      subCategory: ' & Courses Website',
      quantity: 5,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
      year:6
    //  // images:'../../../../assets/images/slider/slider-bg1.jpg'
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
