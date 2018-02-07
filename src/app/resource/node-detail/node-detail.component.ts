import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Node } from '../node';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.css']
})
export class NodeDetailComponent implements AfterViewInit {
  node: Node = {} as Node;

  cpuData: any = {};

  cpuOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend : {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 25,
        }
        scaleLabel: {
          display: true,
          labelString: 'Percentage'
        }
      }]
    }
  };

  networkData: any = {};

  networkOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 2,
          beginAtZero: true,
        },
        scaleLabel: {
          display: true,
          labelString: 'GB'
        }
      }]
    }
  };
  constructor(
    private nodeService: NodeService,
    private route: ActivatedRoute,
  ) {}

  ngAfterViewInit() {
    this.route.paramMap.subscribe(map => {
      let id = map.get('id');
      this.nodeService.getNode(id).subscribe(node => {
        this.node = node;
        this.makeCpuData(node.cpuUsage);
        this.makeNetworkData(node.networkUsage);
      });
    });
  }

  makeLabels(usage): void {
    let labels = usage.map(point => {
      let d = new Date(point.ts);
      let h:any = d.getHours();
      if (h < 10)
        h = '0' + h;
      let m:any = d.getMinutes();
      if (m < 10)
        m = '0' + m;
      return '' + h + ':' + m;
    });
    return labels;
  }

  makeCpuData(usage): void {
    let labels = this.makeLabels(usage);
    let data = usage.map(point => point.value);
    this.cpuData = { labels: labels, datasets: [{ data: data, borderColor: '#215ebb' }] };
  }

  makeNetworkData(usage): void {
    let labels = this.makeLabels(usage);
    let data1 = usage.map(point => point.inbound.toFixed(2));
    let data2 = usage.map(point => point.outbound.toFixed(2));
    this.networkData = {
      labels: labels,
      datasets: [
        { label: 'In',  data: data1, fill: false, borderColor: '#215ebb' },
        { label: 'Out', data: data2, fill: false, borderColor: '#1aab02' }
      ]
    };
  }
}
