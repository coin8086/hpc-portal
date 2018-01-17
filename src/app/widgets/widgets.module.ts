import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MaterialsModule } from '../materials.module';
import { NodeFilterBuilderComponent } from './node-filter-builder/node-filter-builder.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialsModule,
  ],
  declarations: [NodeFilterBuilderComponent],
  entryComponents: [NodeFilterBuilderComponent],
  exports: [NodeFilterBuilderComponent],
})
export class WidgetsModule {}
