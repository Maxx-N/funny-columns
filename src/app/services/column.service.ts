import { Injectable } from '@angular/core';
import { IColumn } from '../models/column';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  columns: IColumn[] = [];
  lastId: number = 0;

  constructor() {
    this.setColumns();
  }

  createCard(columnId: number, number: number): void {
    this.lastId++;
    const col: IColumn = this.columns.find((col) => col.id === columnId)!;
    col.cards.push({ id: this.lastId, number });
  }

  private setColumns(): void {
    for (let i = 1; i <= 3; i++) {
      const column = {
        id: i,
        cards: [],
      };
      this.columns.push(column);
      for (let j = 1; j <= 3; j++) {
        this.createCard(column.id, i + j);
      }
    }
  }
}
