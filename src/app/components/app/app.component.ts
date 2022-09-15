import { Component, OnInit } from '@angular/core';

import { IColumn } from 'src/app/models/column';
import { ColumnService } from 'src/app/services/column.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  columns: IColumn[] = [];

  constructor(private columnService: ColumnService) {}

  ngOnInit(): void {
    this.columns = this.columnService.columns;
  }
}
