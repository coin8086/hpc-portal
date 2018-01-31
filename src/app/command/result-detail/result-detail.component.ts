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

  constructor(
    private route: ActivatedRoute,
    private commandService: CommandService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      let id = map.get('id');
      this.commandService.getResult(id).subscribe(result => {
        this.result = result;
      });
    });
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
      default:
        res = '';
        console.warn('No state!');
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
      default:
        console.warn('No state!');
    }
    return res;
  }
}
