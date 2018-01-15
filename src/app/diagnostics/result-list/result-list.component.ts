import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Result } from '../result';

@Component({
  selector: 'diagnostics-results',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent {

  private dataSource = new MatTableDataSource();
  private displayedColumns = ['testName', 'state', 'progress', 'startedAt', 'updatedAt'];

  private now = new Date().getTime();
  private results = [
    {
      id: 1,
      testName: 'SOA Service Loading',
      state: 'running',
      progress: 0.6,
      startedAt: this.now - 1000 * 60 * 2,
      updatedAt: this.now,
    },
    {
      id: 2,
      testName: 'MPI Latency',
      state: 'success',
      progress: 1.0,
      startedAt: this.now - 1000 * 60 * 20,
      updatedAt: this.now - 1000 * 60 * 10,
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
    this.dataSource.data = this.results;
  }

  viewDetail(result: Result): void {
    this.router.navigate([result.id], { relativeTo: this.route })
  }
}
