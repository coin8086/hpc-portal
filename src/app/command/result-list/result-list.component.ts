import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Result } from '../result';
import { CommandService } from '../command.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  private dataSource = new MatTableDataSource();
  private displayedColumns = ['command', 'state', 'progress', 'startedAt', 'updatedAt'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commandService: CommandService
  ) {}

  ngOnInit() {
    this.commandService.getResults().subscribe(results => {
      this.dataSource.data = results;
    });
  }

  viewDetail(result: Result): void {
    this.router.navigate([result.id], { relativeTo: this.route })
  }
}
