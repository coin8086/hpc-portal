import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MaterialsModule } from '../materials.module';
import { NodeFilterBuilderComponent } from '../node-filter-builder/node-filter-builder.component';
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
    FormsModule,
  ],
  entryComponents: [NodeFilterBuilderComponent],
  declarations: [NodeFilterBuilderComponent, DiagnosticsComponent, TestNewComponent, ResultListComponent, ResultDetailComponent]
})
export class DiagnosticsModule { }
