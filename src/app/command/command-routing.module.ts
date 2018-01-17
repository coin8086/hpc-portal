import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandComponent } from './command.component';
import { CommandNewComponent } from './command-new/command-new.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultDetailComponent } from './result-detail/result-detail.component';

const routes: Routes = [{
  path: '',
  component: CommandComponent,
  children: [
    { path: 'new', component: CommandNewComponent },
    { path: 'results', component: ResultListComponent },
    { path: 'results/:id', component: ResultDetailComponent },
    { path: '', redirectTo: 'results', pathMatch: 'full' },
  ],
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class CommandRoutingModule { }
