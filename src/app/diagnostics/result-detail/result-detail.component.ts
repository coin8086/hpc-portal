import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../result';
import { DiagnosticsService } from '../diagnostics.service';

@Component({
  selector: 'app-result',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {
  private id: string;

  private result: Result = {} as Result;

  constructor(
    private route: ActivatedRoute,
    private diagnosticsService: DiagnosticsService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.diagnosticsService.getResult(this.id).subscribe(result => {
      this.result = result;
    });
  }
}
