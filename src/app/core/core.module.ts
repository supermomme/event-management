import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class CoreModule { }
