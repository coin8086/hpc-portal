import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../result';
import { CommandService } from '../command.service';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.scss']
})
export class ResultDetailComponent implements OnInit {
  private result: Result = {} as Result;

  private filter = '';

  private filtered: any[];

  private overviewData: any = {};

  private overviewOption = {
    responsive: true,
    maintainAspectRatio: false,
    legend : {
      position: 'right',
    },
    onClick: (event, item) => {
      if (!item || item.length == 0)
        return;
      let index = item[0]._index;
      let text = index == 0 ? 'success' : (index == 1 ? 'failure' : 'running');
      this.filterNodes(text);
    },
    onHover: (event, item) => {
      event.target.style.cursor = item.length == 0 ? 'default' : 'pointer';
    },
  };

  constructor(
    private route: ActivatedRoute,
    private commandService: CommandService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      let id = map.get('id');
      this.commandService.getResult(id).subscribe(result => {
        this.result = result;
        this.makeChartData();
        this.filterNodes('');
      });
    });
  }

  filterNodes(text) {
    this.filter = text;
    if (!text)
      this.filtered = this.result.nodes;
    else
      this.filtered = this.result.nodes.filter((node) => node.state === text);
  }

  makeChartData() {
    let success = 0;
    let failure = 0;
    let running = 0;

    this.result.nodes.forEach(node => {
      if (node.state == 'success')
        success++;
      else if (node.state == 'failure')
        failure++;
      else
        running++;
    });
    this.overviewData = {
      labels: ['Success', 'Failure', 'Running'],
      datasets: [{
        data: [success, failure, running],
        backgroundColor: [
          '#44d42b',
          '#ff4e4e',
          '#6f7de4',
        ]
      }],
    };
  }

  stateIcon(state) {
    let res;
    switch(state) {
      case 'success':
        res = 'check';
        break;
      case 'running':
        res = 'directions_run';
        break;
      case 'failure':
        res = 'close';
        break;
    }
    return res;
  }

  title(name, state) {
    let res = name;
    switch(state) {
      case 'success':
        res += ' Succeeded!';
        break;
      case 'running':
        res += ' is Running.';
        break;
      case 'failure':
        res += ' Failed!';
        break;
    }
    return res;
  }
}
