import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../result';

@Component({
  selector: 'app-service-running-test',
  templateUrl: './service-running-test.component.html',
  styleUrls: ['./service-running-test.component.scss']
})
export class ServiceRunningTestComponent implements OnInit {
  @Input() result: Result;

  constructor() { }

  ngOnInit() {
  }

}
