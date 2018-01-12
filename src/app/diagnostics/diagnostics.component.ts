import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.css']
})
export class DiagnosticsComponent implements OnInit {
  private const tabs = [
    { path: 'tests', name: 'Tests' },
    { path: 'command', name: 'Command' },
    { path: 'results', name: 'Results' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  showTabNav(): boolean {
    return !this.router.url.match(/\d+$/);
  }
}
