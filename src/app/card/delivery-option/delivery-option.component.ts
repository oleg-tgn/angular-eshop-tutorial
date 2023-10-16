import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { DeliveryOptions } from 'src/app/types/card';

@Component({
  selector: 'app-delivery-option',
  template: `
    <div class="delivery__option">
      Deliver to your home
      <em>{{options?.delivery}}</em>
    </div>
    <div class="delivery__option">
      Deliver to shop
      <em>{{ postamate }}</em>
    </div>
    <div class="delivery__option">
      In Stock
      <em>{{options?.available}} pc.</em>
    </div>
  `,
  styleUrls: ['./delivery-option.component.scss']
})
export class DeliveryOptionComponent {
  @Input() options?: DeliveryOptions

  get postamate(): string {
    return this.options?.postamate ? 'available' : 'not available';
  }
}
