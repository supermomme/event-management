import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'event/registration', loadChildren: './event-registration-assistant/event-registration-assistant.module#EventRegistrationAssistantModule' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: []
})
export class AssistantsModule { }
