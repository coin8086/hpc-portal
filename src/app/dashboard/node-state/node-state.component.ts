import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-node-state',
  templateUrl: './node-state.component.html',
  styleUrls: ['./node-state.component.css']
})
export class NodeStateComponent implements OnInit {
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

  onlineNodes = this.stateData.datasets[0].data[0];
  totalNodes = this.stateData.datasets[0].data.reduce((acc, e) => acc + e);

  chartOption = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'right',
    },
  };

  constructor() {
  }

  ngOnInit() {
  }

}
