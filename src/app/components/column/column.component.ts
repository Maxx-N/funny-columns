import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IColumn } from 'src/app/models/column';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input() column!: IColumn;
  isAddingCard = false;
  form: FormGroup = new FormGroup({
    number: new FormControl('', { validators: [Validators.required] }),
  });

  constructor() {}

  ngOnInit(): void {}

  onToggle(): void {
    this.isAddingCard = !this.isAddingCard;
  }

  onAddCard(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
