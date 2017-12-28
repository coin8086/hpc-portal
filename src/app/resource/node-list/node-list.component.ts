import { Component, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Node } from '../node';
import { NodeService } from '../node.service';

@Component({
  selector: 'resource-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.css']
})
export class NodeListComponent implements AfterViewInit {
  dataSource = new MatTableDataSource();
  displayedColumns = ['name', 'state', 'health'];

  constructor(private nodeService: NodeService) {}

  ngAfterViewInit() {
    this.nodeService.getNodes().subscribe(nodes => this.dataSource.data = nodes);
  }

}
