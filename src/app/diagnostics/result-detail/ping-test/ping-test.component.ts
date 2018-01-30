import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Result } from '../../result';

@Component({
  selector: 'app-ping-test',
  templateUrl: './ping-test.component.html',
  styleUrls: ['./ping-test.component.scss']
})
export class PingTestComponent implements OnInit {
  @Input() result: Result;

  private dataSource = new MatTableDataSource();
  private displayedColumns = ['Node', 'State', 'Worst', 'Best', 'Average'];

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.result.nodes.map(node => {
      let res = {
        'Node': node.name,
        'State': node.state,
        'Worst': node.worst,
        'Best': node.best,
        'Average': node.average
      };
      return res;
    });
  }

  applyFilter(text: string): void {
    this.dataSource.filter = text;
  }

}
