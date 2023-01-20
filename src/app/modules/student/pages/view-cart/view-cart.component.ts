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
  eventName: string;
  constructor(
    private _constantService: ConstantsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('cart')) {
      this.cartDetails = JSON.parse(localStorage.getItem('cart'));
      if (this.cartDetails?.videos?.length === 1) {
        this.cartDetails?.videos.forEach(element => {
          this.eventName = element.name;
        });
      } else {
        this.eventName = 'BIE USG & CEM Symposium 2023';
      }
      console.log('cartDetails', this.cartDetails);
    } else {
      this._constantService.cartSubject.subscribe(
        (res) => {
          this.cartDetails = res;
          if (this.cartDetails?.videos?.length === 1) {
            this.cartDetails?.videos.forEach(element => {
              this.eventName = element.name;
            });
          } else {
            this.eventName = 'BIE USG & CEM Symposium 2023';
          }
          console.log('cartDetails', this.eventName);
        }, (err) => {
          console.log('err', err);

        })
    }
  }

  makePayment(data): void {
    let name;
    data.forEach((element => {
      name = element.name;
    }))
    console.log(name);

    if (data?.length === 1 && name === 'BIE USG Symposium 2023 Only') {
      window.location.href = "https://book.stripe.com/9AQ9AF34gcWSafC6or";
    } else if (data?.length === 1 && name === 'BIE CEM Symposium 2023 Only') {
      window.location.href = "https://book.stripe.com/14k7sx9sE1ea9by002";
    } else if (data?.length > 1) {
      window.location.href = "https://book.stripe.com/9AQ9AF48kf505Zm4gk"
    }
  }

}
