import { Component } from '@angular/core';
import { evironment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eshop';
  inCart = 0;
  apiUrl = `${evironment.api}`;

  addToCart() {
    this.inCart++;
  }

  removeFromCart() {
    return this.inCart > 0 ? this.inCart-- : this.inCart;
  }
}
