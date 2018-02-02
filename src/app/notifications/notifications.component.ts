import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  @Input()
  items: any[];

  constructor() {}

  ngOnInit() {
  }

  private removeItem(item): void {
    for(let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == item.id) {
        this.items.splice(i, 1);
        break;
      }
    }
  }
}
