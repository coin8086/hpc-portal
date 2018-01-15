import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials.module';
import { TreeModule } from 'angular-tree-component';
import { DiagnosticsRoutingModule } from './diagnostics-routing.module';
import { DiagnosticsComponent } from './diagnostics.component';
import { TestNewComponent } from './test-new/test-new.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  imports: [
    CommonModule,
    DiagnosticsRoutingModule,
    MaterialsModule,
    TreeModule,
  ],
  declarations: [DiagnosticsComponent, TestNewComponent, ResultListComponent, ResultComponent]
})
export class DiagnosticsModule { }
