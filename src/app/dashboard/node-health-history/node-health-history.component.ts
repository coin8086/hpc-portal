import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-node-health-history',
  templateUrl: './node-health-history.component.html',
  styleUrls: ['./node-health-history.component.css']
})
export class NodeHealthHistoryComponent implements OnInit {
  chartData = {};

  chartOption = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };

  constructor() {}

  ngOnInit() {
    this.generateChartData();
  }

  generateTuple(total) {
    //These are for ok, warning, error, transitional and unapproved, in the order.
    const portions = [60, 20, 10, 5, 5];
    let rand = portions.map(e => Math.random() * e);
    let sum = rand.reduce((acc, e) => acc + e);
    return rand.map(e => Math.round((e / sum) * total));
  }

  formatTime(d) {
    let h:any = d.getHours();
    if (h < 10)
      h = '0' + h;
    let m:any = d.getMinutes();
    if (m < 10)
      m = '0' + m;
    return '' + h + ':' + m;
  }

  generateTimeLabels(now, span, num) {
    let labels = [];
    for (let i = 0; i < num; i++) {
      let d = new Date(now - span * i);
      labels.push(this.formatTime(d));
    }
    labels.reverse();
    return labels;
  }

  generateChartData() {
    const labels = [
      'OK',
      'Warning',
      'Error',
      'Transitional',
      'Unapproved',
    ]
    const colors = [
      '#44d42b',
      '#ffee0a',
      '#ff4e4e',
      '#20f5ed',
      '#6d6e71',
    ]
    let now = new Date().getTime();
    let spans = 5 * 60 * 1000;
    let count = 12;
    let values = [];
    for (let i = 0; i < count; i++) {
      values.push(this.generateTuple(330));
    }
    let datasets = [];
    for (let i = 0; i < 5; i++) {
      let data = [];
      for (let j = 0; j < count; j++) {
        data.push(values[j][i]);
      }
      datasets.push({ label: labels[i], data: data, backgroundColor: colors[i] });
    }

    this.chartData = {
      labels: this.generateTimeLabels(now, spans, count),
      datasets: datasets,
    };
  }
}
