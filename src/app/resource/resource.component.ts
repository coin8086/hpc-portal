import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  showTabNav(): boolean {
    return !this.router.url.match(/\/nodes\/\d+$/);
  }

}
