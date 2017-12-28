import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceComponent } from './resource.component';

@NgModule({
  imports: [
    CommonModule,
    ResourceRoutingModule,
  ],
  declarations: [ResourceComponent],
  //bootstrap: [HomeComponent]
})
export class ResourceModule { }
