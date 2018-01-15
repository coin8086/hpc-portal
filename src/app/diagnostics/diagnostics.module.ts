import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials.module';
import { TreeModule } from 'angular-tree-component';
import { DiagnosticsRoutingModule } from './diagnostics-routing.module';
import { DiagnosticsComponent } from './diagnostics.component';
import { TestNewComponent } from './test-new/test-new.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultDetailComponent } from './result-detail/result-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DiagnosticsRoutingModule,
    MaterialsModule,
    TreeModule,
  ],
  declarations: [DiagnosticsComponent, TestNewComponent, ResultListComponent, ResultDetailComponent]
})
export class DiagnosticsModule { }
