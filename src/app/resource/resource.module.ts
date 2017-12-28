import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceRoutingModule } from './resource-routing.module';
import { MaterialsModule } from '../materials.module';
import { ResourceComponent } from './resource.component';
import { NodeListComponent } from './node-list/node-list.component';

@NgModule({
  imports: [
    CommonModule,
    ResourceRoutingModule,
    MaterialsModule,
  ],
  declarations: [ResourceComponent, NodeListComponent],
})
export class ResourceModule { }
