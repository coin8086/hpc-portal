import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items = [
    {
      link: 'dashboard',
      title: 'Dashboard',
      icon: 'dashboard',
    },
    {
      link: 'resource',
      title: 'Resource',
      icon: 'cloud',
    },
    {
      link: 'diagnostics',
      title: 'Diagnostics',
      icon: 'local_hospital',
    },
    {
      link: 'command',
      title: 'Cluster Run',
      icon: 'call_to_action',
    },
  ];
}
