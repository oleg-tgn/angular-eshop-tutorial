import { Component } from '@angular/core'
import { product } from './data/product.data'
import { Product } from './types/card'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eshop';
  product: Product = product
}
