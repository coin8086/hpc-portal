import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {
  private id: number;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id = + this.route.snapshot.paramMap.get('id');
  }
}
