import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Node } from '../node';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.css']
})
export class NodeDetailComponent implements OnInit {
  node: Node = {} as Node;

  constructor(
    private nodeService: NodeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.nodeService.getNode(id).subscribe(node => this.node = node);
  }

  goBack(): void {
    this.location.back();
  }
}
