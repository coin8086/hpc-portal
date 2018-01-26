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
    let id = this.route.snapshot.paramMap.get('id');
    this.commandService.getResult(id).subscribe(result => {
      this.result = result;
    });
  }

  stateIcon(state) {
    let res;
    switch(state) {
      case 'success':
        res = 'check';
        break;
      case 'running':
        res = 'check';
        break;
      default:
        res = 'close';
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
      default:
        res += ' Failed!';
    }
    return res;
  }
}
