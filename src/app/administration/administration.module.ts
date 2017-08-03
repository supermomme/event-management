import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { AdministrationLayoutComponent } from './administration-layout/administration-layout.component';

const routes: Routes = [
  { path: '', component: AdministrationLayoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [AdministrationLayoutComponent]
})
export class AdministrationModule { }
