import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventRegistrationStep1Component } from './event-registration-step-1/event-registration-step-1.component';
import { EventRegistrationStep2Component } from './event-registration-step-2/event-registration-step-2.component';

const routes: Routes = [
  { path: 'event/registration', component: EventRegistrationComponent },
  { path: 'event/registration/:eventId', component: EventRegistrationComponent },
  { path: 'event/registration/:eventId/:purposeId', component: EventRegistrationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    EventRegistrationComponent,
    EventRegistrationStep1Component,
    EventRegistrationStep2Component
  ]
})
export class AssistantModule { }
