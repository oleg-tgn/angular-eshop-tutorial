import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ProductBage } from 'src/app/types/card'

@Component({
  selector: 'app-bage',
  template: `
    <div class="bage" [style.background-color]="bage?.color">
      {{bage?.text}}
    </div>
  `,
  styleUrls: ['./bage.component.scss']
})
export class BageComponent {
  @Input() bage?: ProductBage;
}
