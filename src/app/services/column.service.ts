import { Injectable } from '@angular/core';
import { ICard } from '../models/card';
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

  updatecard(cardId: number, number: number): void {
    this.getCardById(cardId).number = number;
  }

  deleteCard(cardId: number): void {
    const col = this.columns.find((col) =>
      col.cards.map((c) => c.id).includes(cardId)
    )!;
    col.cards = col?.cards.filter((card) => card.id !== cardId);
  }

  private getCardById(cardId: number): ICard {
    return this.getCards().find((c) => c.id === cardId)!;
  }

  private getCards(): ICard[] {
    const cards: ICard[] = [];
    this.columns.forEach((col) => {
      cards.push(...col.cards);
    });
    return cards;
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
