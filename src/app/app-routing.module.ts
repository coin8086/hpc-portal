import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'resource', loadChildren: 'app/resource/resource.module#ResourceModule' },
  { path: 'diagnostics', loadChildren: 'app/diagnostics/diagnostics.module#DiagnosticsModule' },
  { path: 'command', loadChildren: 'app/command/command.module#CommandModule' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
