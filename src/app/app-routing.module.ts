import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: "Dashboard" }},
  { path: 'resource', loadChildren: 'app/resource/resource.module#ResourceModule', data: { breadcrumb: "Resource" }},
  { path: 'diagnostics', loadChildren: 'app/diagnostics/diagnostics.module#DiagnosticsModule', data: { breadcrumb: "Diagnostics" }},
  { path: 'command', loadChildren: 'app/command/command.module#CommandModule', data: { breadcrumb: "Cluster Run" }},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
