import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {

  @Input() maxStars?: number;
  @Output() ratingChanged = new EventEmitter<number>();

  rating: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setRating(starNumber: number): void {
    this.rating = starNumber;
    this.ratingChanged.emit(this.rating);
  }

  isStarFilled(starNumber: number): boolean {
    return starNumber <= this.rating;
  }

}
