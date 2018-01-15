import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  private tabs = [
    { path: 'new', name: 'Command' },
    { path: 'results', name: 'Results' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showTabNav(): boolean {
    return !this.router.url.match(/\d+$/);
  }
}
