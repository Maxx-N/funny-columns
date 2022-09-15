import { Injectable } from '@angular/core';
import { IColumn } from '../models/column';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  columns: IColumn[] = [];

  constructor() {
    this.setColumns();
  }

  setColumns(): void {
    for (let i = 1; i <= 3; i++) {
      const column = { id: i, cards: [{ id: i, number: i }, { id: i, number: i }, { id: i, number: i }] };
      this.columns.push(column);
    }
  }
}
