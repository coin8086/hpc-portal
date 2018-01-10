import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceComponent } from './resource.component';
import { NodeListComponent } from './node-list/node-list.component';
import { NodeDetailComponent } from './node-detail/node-detail.component';
import { NodeHeatmapComponent } from './node-heatmap/node-heatmap.component';

const routes: Routes = [{
  path: '',
  component: ResourceComponent,
  //children: [
  //  { path: 'nodes/heatmap', component: NodeHeatmapComponent },
  //  { path: 'nodes/list', component: NodeListComponent },
  //  { path: 'nodes/:id', component: NodeDetailComponent },
  //  { path: '', redirectTo: 'nodes/list', pathMatch: 'full' },
  //],
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class ResourceRoutingModule { }
