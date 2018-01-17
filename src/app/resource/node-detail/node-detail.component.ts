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

  cpuChartData: any = {};

  cpuChartOptions = {
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
      }]
    }
  };

  constructor(
    private nodeService: NodeService,
    private route: ActivatedRoute,
  ) {}

  ngAfterViewInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.nodeService.getNode(id).subscribe(node => {
      this.node = node;
      this.makeCpuChartData(node.cpuUsage);
    });
  }

  makeCpuChartData(usage): void {
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
    let data = usage.map(point => point.value);
    this.cpuChartData = { labels: labels, datasets: [{ data: data }] };
  }
}
