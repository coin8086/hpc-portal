import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-node-health',
  templateUrl: './node-health.component.html',
  styleUrls: ['./node-health.component.css']
})
export class NodeHealthComponent implements OnInit {
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

  okNodes = this.healthData.datasets[0].data[0];
  totalNodes = this.healthData.datasets[0].data.reduce((acc, e) => acc + e);

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
