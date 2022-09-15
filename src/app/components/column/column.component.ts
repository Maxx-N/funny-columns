import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IColumn } from 'src/app/models/column';
import { ColumnService } from 'src/app/services/column.service';

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

  constructor(private columnService: ColumnService) {}

  ngOnInit(): void {}

  onToggle(): void {
    this.isAddingCard = !this.isAddingCard;
  }

  onAddCard(): void {
    if (this.form.valid) {
      this.columnService.createCard(this.column.id, this.form.value.number);
      this.form.reset();
    }
  }
}
