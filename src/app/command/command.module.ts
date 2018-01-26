import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CommandService } from './command.service';
import { FormsModule } from '@angular/forms'
import { MaterialsModule } from '../materials.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { CommandRoutingModule } from './command-routing.module';
import { CommandComponent } from './command.component';
import { NewComponent } from './new/new.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultDetailComponent } from './result-detail/result-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    CommandRoutingModule,
    MaterialsModule,
    WidgetsModule,
    FormsModule,
  ],
  declarations: [CommandComponent, NewComponent, ResultListComponent, ResultDetailComponent],
  providers: [CommandService],
})
export class CommandModule { }
