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
      message: 'Cluster Run command "dir" is in progress...',
      link: '/#/command/results/1',
    },
    {
      ts: now - 27 * 60 * 1000,
      type: 'info',
      message: 'MPI Latency test finished successfully.',
      link: '/#/diagnostics/results/2',
    },
  ];

  constructor() {}

  ngOnInit() {
  }

}
