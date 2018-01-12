import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosticsComponent } from './diagnostics.component';
import { TestsComponent } from './tests/tests.component';
import { ResultsComponent } from './results/results.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [{
  path: '',
  component: DiagnosticsComponent,
  children: [
    { path: 'tests', component: TestsComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'results/:id', component: ResultComponent },
    { path: '', redirectTo: 'tests', pathMatch: 'full' },
  ],
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class DiagnosticsRoutingModule { }
