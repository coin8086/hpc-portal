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

  overviewData: any = {};

  overviewOption = {
    responsive: false,
    //maintainAspectRatio: false,
    //legend : {
    //  display: false,
    //},
  };

  success = 0;

  failure = 0;

  constructor() { }

  ngOnInit() {
    this.result.nodes.forEach(node => {
      if (node.state == 'success')
        this.success++;
      else
        this.failure++;
    });
    this.overviewData = {
      labels: ['Success', 'Failure'],
      datasets: [{
        data: [this.success, this.failure],
        backgroundColor: [
          //'#d5ffd4',
          //'#ffdada',
          '#109210',
          '#f34646',
        ]
      }],
    };
  }

  stateIcon(state) {
    return state === 'success' ? 'check' : 'close';
  }

  title(name, state) {
    let res = name;
    if (state === 'success') {
      res += ' Succeeded!';
    }
    else {
      res += ' Failed!';
    }
    return res;
  }
}
