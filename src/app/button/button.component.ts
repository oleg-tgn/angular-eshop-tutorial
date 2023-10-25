import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button>{{value}}</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() value = 'Add to cart';

  constructor() {}

  ngOnInit(): void {
  }
}
