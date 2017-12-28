import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'resource-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.css']
})
export class NodeListComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns = ['name', 'state', 'health'];

    constructor() {
      this.dataSource.data = [
        { name: 'HN1', state: 'online', health: 'ok' },
        { name: 'HN2', state: 'online', health: 'error' },
        { name: 'HN3', state: 'offline', health: 'ok' },
      ];
    }

  ngOnInit() {
  }

}
