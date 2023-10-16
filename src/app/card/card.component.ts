import { Component } from '@angular/core';
import { Input } from '@angular/core'
import { Product } from '../types/card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product?: Product
}
