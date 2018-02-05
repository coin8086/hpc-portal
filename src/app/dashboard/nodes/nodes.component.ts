import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {
  healthData = {
    labels: ['OK', 'Warning', 'Error', 'Transitional', 'Unapproved'],
    datasets: [{
      data: [257, 33, 20, 18, 12],
      backgroundColor: [
        '#44d42b',
        '#ffee0a',
        '#ff4e4e',
        '#20f5ed',
        '#6d6e71',
      ]
    }],
  };

  stateData = {
    labels: ['Online', 'Offline', 'Unknown', 'Provisioning', 'Starting', 'Draining', 'Removing', 'Rejected', 'Not-Deployed', 'Stopping'],
    datasets: [{
      data: [287, 28, 12, 17, 24, 9, 4, 3, 5, 3],
      backgroundColor: [
        '#44d42b',
        '#c3c3c3',
        '#6d6e71',
        '#20f5ed',
        '#c9f5c1',
        '#ececec',
        '#f1ec1b',
        '#f34646',
        '#8b84e8',
        '#ffb239',
      ]
    }],
  };

  okNodes = this.healthData.datasets[0].data[0];
  onlineNodes = this.stateData.datasets[0].data[0];
  totalNodes = this.healthData.datasets[0].data.reduce((acc, e) => acc + e);

  chartOption = {
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor() {
  }

  ngOnInit() {
  }

}
