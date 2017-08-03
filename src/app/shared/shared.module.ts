import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";

export const providers = [
  NgbTooltipConfig
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right', progressBar:true}),
    NgbModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ToastrModule,
    RouterModule
  ],
  declarations: []
})
export class SharedModule {
  static withProviders() : ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [...providers]
    };
  }
}
