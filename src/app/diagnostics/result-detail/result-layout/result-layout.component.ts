import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { Result } from '../../result';

@Component({
  selector: 'app-result-layout',
  templateUrl: './result-layout.component.html',
  styleUrls: ['./result-layout.component.scss']
})
export class ResultLayoutComponent implements OnInit {
  @Input()
  result: Result = {} as Result;

  @ContentChild('summary')
  summaryTemplate: TemplateRef<any>;

  @ContentChild('node')
  nodeTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
