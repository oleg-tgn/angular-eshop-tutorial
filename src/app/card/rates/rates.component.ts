import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {

  @Input() maxStars = 5;
  @Input() rating: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  isStarFilled(starNumber: number): boolean {
    return starNumber <= this.rating;
  }

}
