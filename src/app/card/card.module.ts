import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ButtonModule } from '../button/button.module';
import { ButtonIconModule } from '../button/button-icon.module';
import { BageModule } from './bage/bage.module';
import { ColorOptionModule } from './color-option/color-option.module';
import { RatesModule } from './rates/rates.module';
import { PriceModule } from './price/price.module';
import { DeliveryOptionModule } from './delivery-option/delivery-option.module';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BageModule,
    ButtonIconModule,
    ColorOptionModule,
    RatesModule,
    PriceModule,
    DeliveryOptionModule,
  ],
  exports: [
    CardComponent
  ],
})
export class CardModule { }
