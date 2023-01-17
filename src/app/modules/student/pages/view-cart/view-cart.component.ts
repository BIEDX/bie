import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/core/providers/apis/constants.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
  cartDetails: any;
  constructor(
    private _constantService: ConstantsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('cart')) {
      this.cartDetails = JSON.parse(localStorage.getItem('cart'));
      console.log('cartDetails', this.cartDetails);
    } else {
      this._constantService.cartSubject.subscribe(
        (res) => {
          this.cartDetails = res;
          console.log('cartDetails', this.cartDetails);
        }, (err) => {
          console.log('err', err);

        })
    }
  }

  makePayment(data): void {
    if (data?.length === 1) {
      window.location.href="https://buy.stripe.com/3csbIN7kw7Cy1J6dQQ";
    } else if (data?.length > 1) {
      window.location.href="https://buy.stripe.com/5kA5kp20c7CyafC001"
    }
  }

}
