import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core'
import { Product } from '../types/card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
  @Input() product?: Product

  isFavorite = false;
  image: string = ''

  ngOnChanges(): void {
    if (this.product) {
      this.isFavorite = false
      this.image = this.product?.image || ''
    }
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  changeImage(image?: string): void {
    this.image = image || ''
  }
}
