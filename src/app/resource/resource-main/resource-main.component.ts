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

  private query = { view: '', filter: '' };

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
    this.nodeService.getNodes().subscribe(nodes => {
      this.nodes = nodes;
    });
    this.route.queryParamMap.subscribe(params => {
      this.query.view = params.get('view') || 'list';
      this.query.filter = params.get('filter');
      this.updateUI();
    });
  }

  updateUrl() {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: this.query});
  }

  updateUI() {
    let view = this.query.view;
    this.tabs.selectedIndex = (view == 'heatmap') ? 1 : 0;

    let filter = this.query.filter;
    if (filter) {
      this.applyFilter(filter);
    }
  }

  onTabChanged(event): void {
    this.query.view = event.index == 0 ? 'list' : 'heatmap';
    this.updateUrl();
  }

  applyFilter(text: string): void {
    this.list.filter(text);
    this.map.nodes = this.list.filteredData;
  }

  viewNodeDetail(node) {
    this.router.navigate([node.id], { relativeTo: this.route })
  }

  hasNoSelection(): boolean {
    return this.list.selectedData.length == 0;
  }
}
