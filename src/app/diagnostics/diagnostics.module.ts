import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials.module';
import { DiagnosticsRoutingModule } from './diagnostics-routing.module';
import { DiagnosticsComponent } from './diagnostics.component';
import { TestsComponent } from './tests/tests.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  imports: [
    CommonModule,
    DiagnosticsRoutingModule,
    MaterialsModule,
  ],
  declarations: [DiagnosticsComponent, TestsComponent, ResultsComponent]
})
export class DiagnosticsModule { }
