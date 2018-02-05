import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-chartjs';
import { MaterialsModule } from '../materials.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NodesComponent } from './nodes/nodes.component';
import { JobsComponent } from './jobs/jobs.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule,
    MaterialsModule,
  ],
  declarations: [DashboardComponent, NodesComponent, JobsComponent, LocationComponent],
  //bootstrap: [HomeComponent]
})
export class DashboardModule { }
