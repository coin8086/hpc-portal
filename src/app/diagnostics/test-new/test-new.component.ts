import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeComponent } from 'angular-tree-component';

@Component({
  selector: 'diagnostics-tests',
  templateUrl: './test-new.component.html',
  styleUrls: ['./test-new.component.css']
})
export class TestNewComponent implements OnInit {
  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  private tests = [{
    name: 'All',
    children: [
      {
        name: 'SOA',
        children: [
          {
            name: 'Service Loading'
          }
        ]
      },
      {
        name: 'MPI',
        children: [
          {
            name: 'Latency'
          },
          {
            name: 'Throughput'
          },
          {
            name: 'Simple Throughput'
          }
        ]
      },
    ]
  }];

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.tree.treeModel.expandAll(), 0);
  }

  private check(node, checked) {
    this.updateChildNodeCheckbox(node, checked);
    this.updateParentNodeCheckbox(node.realParent);
  }

  private updateChildNodeCheckbox(node, checked) {
    node.data.checked = checked;
    if (node.children) {
      node.children.forEach((child) => this.updateChildNodeCheckbox(child, checked));
    }
  }

  private updateParentNodeCheckbox(node) {
    if (!node) {
      return;
    }

    let allChildrenChecked = true;
    let noChildChecked = true;

    for (const child of node.children) {
      if (!child.data.checked || child.data.indeterminate) {
        allChildrenChecked = false;
      }
      if (child.data.checked) {
        noChildChecked = false;
      }
    }

    if (allChildrenChecked) {
      node.data.checked = true;
      node.data.indeterminate = false;
    }
    else if (noChildChecked) {
      node.data.checked = false;
      node.data.indeterminate = false;
    }
    else {
      node.data.checked = true;
      node.data.indeterminate = true;
    }
    this.updateParentNodeCheckbox(node.parent);
  }
}
