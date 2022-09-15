import { Component, Input, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICard } from 'src/app/models/card';
import { ColumnService } from 'src/app/services/column.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: ICard;
  isBeingUpdated = false;
  form = new FormGroup({
    number: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(private columnService: ColumnService) {}

  ngOnInit(): void {
    this.form.setValue({ number: this.card.number.toString() });
  }

  onUpdate(): void {
    if (this.form.valid) {
      this.columnService.updatecard(
        this.card.id,
        +(this.form.value.number as string)
      );
      this.isBeingUpdated = false;
    }
  }

  onDelete(): void {
    this.columnService.deleteCard(this.card.id);
  }

  onDisplayForm(): void {
    this.isBeingUpdated = true;
  }

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
