import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.css']
})
export class DiagnosticsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  showTabNav(): boolean {
    return !!this.router.url.match(/ts$/);
  }
}
