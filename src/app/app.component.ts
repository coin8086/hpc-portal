import { Component } from '@angular/core';

const now = (new Date()).getTime();

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

  private notifications = [
    {
      id: 1,
      ts: now - 27 * 60 * 1000,
      type: 'info',
      message: 'Cluster Run: Command "dir" is in progress...',
      link: '/#/command/results/1',
    },
    {
      id: 2,
      ts: now - 10 * 60 * 1000,
      type: 'error',
      message: 'Diagnostics: Ping test failed.',
      link: '/#/diagnostics/results/2',
    },
    {
      id: 3,
      ts: now - 2 * 60 * 1000,
      type: 'warning',
      message: 'It\'s going to rain in 30 minutes.',
      link: 'https://weather.com',
    },
  ];
}
