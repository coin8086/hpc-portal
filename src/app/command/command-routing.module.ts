import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandComponent } from './command.component';
import { NewComponent } from './new/new.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultDetailComponent } from './result-detail/result-detail.component';

const routes: Routes = [{
  path: '',
  component: CommandComponent,
  children: [
    { path: 'new', component: NewComponent, data: { breadcrumb: "New" }},
    { path: 'results', component: ResultListComponent, data: { breadcrumb: "Results" }},
    { path: 'results/:id', component: ResultDetailComponent, data: { breadcrumb: "Result" }},
    { path: '', redirectTo: 'results', pathMatch: 'full' },
  ],
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class CommandRoutingModule { }
