import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials.module';
import { TreeModule } from 'angular-tree-component';
import { DiagnosticsRoutingModule } from './diagnostics-routing.module';
import { DiagnosticsComponent } from './diagnostics.component';
import { TestsComponent } from './tests/tests.component';
import { ResultsComponent } from './results/results.component';
import { ResultComponent } from './result/result.component';
import { CommandComponent } from './command/command.component';

@NgModule({
  imports: [
    CommonModule,
    DiagnosticsRoutingModule,
    MaterialsModule,
    TreeModule,
  ],
  declarations: [DiagnosticsComponent, TestsComponent, ResultsComponent, ResultComponent, CommandComponent]
})
export class DiagnosticsModule { }
