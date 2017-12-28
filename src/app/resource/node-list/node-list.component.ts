import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private nodeService: NodeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    this.nodeService.getNodes().subscribe(nodes => this.dataSource.data = nodes);
  }

  viewDetail(id): void {
    this.router.navigate([id], { relativeTo: this.route })
  }

}
