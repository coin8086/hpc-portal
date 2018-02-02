import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Result } from '../result';
import { DiagnosticsService } from '../diagnostics.service';

@Component({
  selector: 'diagnostics-results',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent {

  private dataSource = new MatTableDataSource();
  private displayedColumns = ['testName', 'state', 'progress', 'startedAt', 'updatedAt'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private diagnosticsService: DiagnosticsService
  ) {}

  ngOnInit() {
    this.diagnosticsService.getResults().subscribe(results => {
      this.dataSource.data = results;
    });
  }
}
