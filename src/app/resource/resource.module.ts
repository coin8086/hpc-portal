import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ChartModule } from 'angular2-chartjs';
import { ResourceRoutingModule } from './resource-routing.module';
import { MaterialsModule } from '../materials.module';
import { ResourceComponent } from './resource.component';
import { NodeListComponent } from './node-list/node-list.component';
import { NodeDetailComponent } from './node-detail/node-detail.component';
import { NodeHeatmapComponent } from './node-heatmap/node-heatmap.component';
import { NodeService } from './node.service';
import { InMemoryDataService }  from './in-memory-data.service';
import { ResourceMainComponent } from './resource-main/resource-main.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    ResourceRoutingModule,
    MaterialsModule,
    ChartModule,
  ],
  declarations: [ResourceComponent, NodeListComponent, NodeDetailComponent, NodeHeatmapComponent, ResourceMainComponent],
  providers: [NodeService],
})
export class ResourceModule { }
