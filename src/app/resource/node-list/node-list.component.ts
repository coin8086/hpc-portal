import { Component, OnChanges, SimpleChanges, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel  } from '@angular/cdk/collections';
import { Node } from '../node';

@Component({
  selector: 'resource-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.css']
})
export class NodeListComponent implements OnChanges {
  @Input() nodes = [];
  @Output() clickNode: EventEmitter<any> = new EventEmitter();

  private dataSource = new MatTableDataSource();
  private displayedColumns = ['select', 'name', 'state', 'health', 'runningJobs'];

  private selection = new SelectionModel(true, []);

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.nodes)
      this.dataSource.data = this.nodes;
  }

  filter(text: string): void {
    this.dataSource.filter = text;
  }

  get filteredData(): any[] {
    return this.dataSource.filteredData;
  }

  clickRow(node): void {
    this.clickNode.emit(node);
  }

  private isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  private masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
