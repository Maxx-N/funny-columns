import { Component, Input, OnInit } from '@angular/core';

import { IColumn } from 'src/app/models/column';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input() column!: IColumn;
  isAddingCard = false;

  constructor() {}

  ngOnInit(): void {}

  onToggle(): void {
    this.isAddingCard = !this.isAddingCard;
  }
}
