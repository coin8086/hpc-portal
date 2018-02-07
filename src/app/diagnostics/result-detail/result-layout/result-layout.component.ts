import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { Result } from '../../result';

@Component({
  selector: 'app-result-layout',
  templateUrl: './result-layout.component.html',
  styleUrls: ['./result-layout.component.scss']
})
export class ResultLayoutComponent implements OnInit {
  @Input()
  result: Result = {} as Result;

  @Output()
  filterNodes: EventEmitter<any> = new EventEmitter();

  @ContentChild('nodes')
  nodesTemplate: TemplateRef<any>;

  overviewData: any = {};

  overviewOption = {
    responsive: true,
    maintainAspectRatio: false,
    legend : {
      position: 'right',
    },
    onClick: (event, item) => {
      if (!item || item.length == 0)
        return;
      let index = item[0]._index;
      let text = index == 0 ? 'success' : 'failure';
      this.filterNodes.emit(text);
    },
    //The CPU is high on the hover event. So maybe it's not good to do it.
    onHover: (event, item) => {
      event.target.style.cursor = item.length == 0 ? 'default' : 'pointer';
    },
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
          '#44d42b',
          '#ff4e4e',
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
