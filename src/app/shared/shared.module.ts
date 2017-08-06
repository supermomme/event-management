import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";
import { BusyModule } from 'angular2-busy';

export const providers = [
  NgbTooltipConfig
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right', progressBar:true}),
    NgbModule.forRoot(),
    RouterModule,
    BusyModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ToastrModule,
    RouterModule,
    BusyModule
  ],
  declarations: []
})
export class SharedModule { }
