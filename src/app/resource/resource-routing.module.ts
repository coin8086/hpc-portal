import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceComponent } from './resource.component';
import { NodeDetailComponent } from './node-detail/node-detail.component';
import { ResourceMainComponent } from './resource-main/resource-main.component';

const routes: Routes = [{
  path: '',
  component: ResourceComponent,
  children: [
    { path: '', component: ResourceMainComponent },
    { path: ':id', component: NodeDetailComponent },
  ],
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class ResourceRoutingModule { }
