import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TestResult } from '../test-result';

@Component({
  selector: 'diagnostics-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  private dataSource = new MatTableDataSource();
  private displayedColumns = ['testName', 'state', 'progress', 'startedAt', 'updatedAt'];

  private now = new Date().getTime();
  private results = [
    {
      testName: 'SOA Service Loading',
      state: 'running',
      progress: 0.6,
      startedAt: this.now - 1000 * 60 * 2,
      updatedAt: this.now,
    },
    {
      testName: 'MPI Latency',
      state: 'success',
      progress: 1.0,
      startedAt: this.now - 1000 * 60 * 20,
      updatedAt: this.now - 1000 * 60 * 10,
    },
  ];

  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.results;
  }

  viewDetail(result: TestResult): void {
  }
}
