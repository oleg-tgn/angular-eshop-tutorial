import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ProductPrice } from 'src/app/types/card';

@Component({
  selector: 'app-price',
  template: `
    <div 
      class="price__discount" 
      [ngClass]="{'price__discount_hidden': !price?.discount}"
    >
      <div class="price__prev">{{price?.value}}$</div>
      <div class="price__discount-bage">-{{discount}}%</div>
    </div>
    <div class="price">{{ newPrice }}$</div>
  `,
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit, OnChanges {
  @Input() price?: ProductPrice
  newPrice: number = 0

  ngOnChanges() {
    if (this.price) {
      this.newPrice = this.price.discount ? 
                      this.price.value * (1 - this.price.discount) :
                      this.price.value
    }
  }

  ngOnInit() {}

  get discount(): number {
    return (this.price?.discount || 0) * 100;
  }
}
