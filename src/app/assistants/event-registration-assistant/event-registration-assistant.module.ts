import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventRegistrationStep1Component } from './event-registration-step-1/event-registration-step-1.component';
import { EventRegistrationStep2Component } from './event-registration-step-2/event-registration-step-2.component';
import { EventRegistrationSuccessComponent } from './event-registration-success/event-registration-success.component';

const routes: Routes = [
  { path: '', component: EventRegistrationComponent },
  { path: ':eventId', component: EventRegistrationComponent },
  { path: ':eventId/:purposeId', component: EventRegistrationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [EventRegistrationComponent, EventRegistrationStep1Component, EventRegistrationStep2Component, EventRegistrationSuccessComponent]
})
export class EventRegistrationAssistantModule { }
