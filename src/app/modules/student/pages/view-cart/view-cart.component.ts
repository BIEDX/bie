import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
  cartDetails: any;
  constructor() { }

  ngOnInit(): void {
    this.cartDetails = JSON.parse(localStorage.getItem('cart'));
    console.log('cartDetails', this.cartDetails);

  }

}
