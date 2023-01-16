import { Component, OnInit } from '@angular/core';
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

}
