import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { AdministrationLayoutComponent } from './administration-layout/administration-layout.component';
import { AdministrationUserListComponent } from './administration-user-list/administration-user-list.component';
import { AdministrationUserEditComponent } from './administration-user-edit/administration-user-edit.component';
import { AdministrationRoleListComponent } from './administration-role-list/administration-role-list.component';
import { AdministrationRoleEditComponent } from './administration-role-edit/administration-role-edit.component';
import { AdministrationPurposeListComponent } from './administration-purpose-list/administration-purpose-list.component';
import { AdministrationRegistrationListComponent } from './administration-registration-list/administration-registration-list.component';
import { AdministrationEventListComponent } from './administration-event-list/administration-event-list.component';
import { AdministrationEventEditComponent } from './administration-event-edit/administration-event-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationLayoutComponent,
    children: [
      { path: 'user', component: AdministrationUserListComponent },
      { path: 'user/:id', component: AdministrationUserEditComponent },
      { path: 'role', component: AdministrationRoleListComponent },
      { path: 'role/:id', component: AdministrationRoleEditComponent },
      { path: 'purpose', component: AdministrationPurposeListComponent },
      { path: 'registration', component: AdministrationRegistrationListComponent },
      { path: 'event', component: AdministrationEventListComponent },
      { path: 'event/:id', component: AdministrationEventEditComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    AdministrationLayoutComponent,
    AdministrationUserListComponent,
    AdministrationUserEditComponent,
    AdministrationRoleListComponent,
    AdministrationRoleEditComponent,
    AdministrationPurposeListComponent,
    AdministrationRegistrationListComponent,
    AdministrationEventListComponent,
    AdministrationEventEditComponent
  ]
})
export class AdministrationModule { }
