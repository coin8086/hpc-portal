import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NodeService } from './node.service';
import { NodeListComponent } from './node-list/node-list.component';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements AfterViewInit {
  private nodes = [];

  @ViewChild(NodeListComponent)
  private list: NodeListComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nodeService: NodeService
  ) {}

  ngAfterViewInit() {
    this.nodeService.getNodes().subscribe(nodes => {
      this.nodes = nodes;
    });
  }

  applyFilter(text: string): void {
    this.list.filter(text);
  }

  viewNodeDetail(node) {
    //this.router.navigate([node.id], { relativeTo: this.route })
  }
}
