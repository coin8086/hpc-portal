import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-ping-test',
  templateUrl: './ping-test.component.html',
  styleUrls: ['./ping-test.component.scss']
})
export class PingTestComponent implements OnInit {
  @Input() result: Result = {} as Result;

  constructor() { }

  ngOnInit() {
  }

}
