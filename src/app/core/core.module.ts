import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LayoutComponent, LayoutHeaderComponent],
  exports: [LayoutComponent]
})
export class CoreModule { }
