import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials.module';
import { CommandRoutingModule } from './command-routing.module';
import { CommandComponent } from './command.component';
import { CommandNewComponent } from './command-new/command-new.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultDetailComponent } from './result-detail/result-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CommandRoutingModule,
    MaterialsModule,
  ],
  declarations: [CommandComponent, CommandNewComponent, ResultListComponent, ResultDetailComponent]
})
export class CommandModule { }
