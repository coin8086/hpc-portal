import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {

  constructor(
    private location: Location
  ) {}

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
