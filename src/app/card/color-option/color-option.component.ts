import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-color-option',
  template: `<div class="card__color-option" 
    [ngStyle]="{'background-color': color, 'border-color': borderColor}"></div>`,
  styles: [
    `
      .card__color-option {
        width: 15px;
        height: 15px;
        border-radius: 2px;
        border: 1px solid;
        cursor: pointer;
      }
    `
  ]
})
export class ColorOptionComponent {
  @Input() color = 'white';

  get borderColor(): string {
    return this.color == 'white' ? 'gray' : this.color
  }
}
