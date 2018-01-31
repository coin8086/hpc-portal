import { Component, OnInit } from '@angular/core';

const now = (new Date()).getTime();

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  private items = [
    {
      ts: now - 10 * 60 * 1000,
      type: 'info',
      message: 'Cluster Run: Command "dir" is in progress...',
      link: '/#/command/results/1',
    },
    {
      ts: now - 27 * 60 * 1000,
      type: 'info',
      message: 'Diagnostics: Ping test completed.',
      link: '/#/diagnostics/results/2',
    },
  ];

  constructor() {}

  ngOnInit() {
  }

}
