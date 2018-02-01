import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs'
import { NodeService } from '../node.service';
import { NodeListComponent } from '../node-list/node-list.component';
import { NodeHeatmapComponent } from '../node-heatmap/node-heatmap.component';

@Component({
  selector: 'app-resource-main',
  templateUrl: './resource-main.component.html',
  styleUrls: ['./resource-main.component.css']
})
export class ResourceMainComponent implements OnInit {
  private nodes = [];

  @ViewChild(MatTabGroup)
  private tabs: MatTabGroup;

  @ViewChild(NodeListComponent)
  private list: NodeListComponent;

  @ViewChild(NodeHeatmapComponent)
  private map: NodeHeatmapComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nodeService: NodeService,
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      let view = params.get('view');
      this.tabs.selectedIndex = (view == 'heatmap') ? 1 : 0;
    });
    this.nodeService.getNodes().subscribe(nodes => {
      this.nodes = nodes;
    });
  }

  onTabChanged(event): void {
    //Navigate to the same url while changing the query parameters. It won't
    //reload the component, neither the nodes data.
    if (event.index == 0) {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: { view: 'list' }});
    }
    else {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: { view: 'heatmap' }});
    }
  }

  applyFilter(text: string): void {
    this.list.filter(text);
    this.map.nodes = this.list.filteredData;
  }

  viewNodeDetail(node) {
    this.router.navigate([node.id], { relativeTo: this.route })
  }
}
