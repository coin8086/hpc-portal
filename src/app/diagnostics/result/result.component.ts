import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  private id: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.id = + this.route.snapshot.paramMap.get('id');
  }

  goBack(): void {
    this.location.back();
  }
}
