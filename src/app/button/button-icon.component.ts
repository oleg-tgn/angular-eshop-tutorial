import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'app-button-icon',
    template: `<button [ngClass]="{'button_active': active}">
        <i class="fa-solid fa-heart"></i>
    </button>`,
    styleUrls: ['./button-icon.component.scss']
  })
  export class ButtonIconComponent implements OnInit {
    @Input() active = false;
  
    constructor() {}
  
    ngOnInit(): void {
    }
  }
  