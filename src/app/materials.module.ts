import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
	MatRadioModule,
  MatSelectModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
	MatRadioModule,
  MatSelectModule,
  MatTooltipModule,
  MatStepperModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialsModule { }
