import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NodeFilterBuilderComponent } from '../../widgets/node-filter-builder/node-filter-builder.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  private nodeFilter: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  private openFilterBuilder(): void {
    let dialogRef = this.dialog.open(NodeFilterBuilderComponent, {
      //width: '250px',
      data: { filter: this.nodeFilter }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== false)
        this.nodeFilter = result;
    });
  }
}
