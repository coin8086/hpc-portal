import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosticsComponent } from './diagnostics.component';
import { TestNewComponent } from './test-new/test-new.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultDetailComponent } from './result-detail/result-detail.component';

const routes: Routes = [{
  path: '',
  component: DiagnosticsComponent,
  children: [
    { path: 'new', component: TestNewComponent },
    { path: 'results', component: ResultListComponent },
    { path: 'results/:id', component: ResultDetailComponent },
    { path: '', redirectTo: 'new', pathMatch: 'full' },
  ],
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class DiagnosticsRoutingModule { }
