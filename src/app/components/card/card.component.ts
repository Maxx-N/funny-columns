import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: ICard;

  constructor() {}

  ngOnInit(): void {}

  isDivisibleBy3And5(): boolean {
    return this.card.number % 3 === 0 && this.card.number % 5 === 0;
  }

  isDivisibleBy3(): boolean {
    return !this.isDivisibleBy3And5() && this.card.number % 3 === 0;
  }

  isDivisibleBy5(): boolean {
    return !this.isDivisibleBy3And5() && this.card.number % 5 === 0;
  }
}
