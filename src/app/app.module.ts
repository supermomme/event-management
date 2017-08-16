import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FeathersModule } from './feathers/feathers.module';
import { AuthGuardService } from './feathers/auth-guard.service';
import { CoreModule } from "./core/core.module";
import { LayoutComponent } from './core/layout/layout.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/admin', pathMatch: 'full' },
      { path: 'admin', loadChildren: 'app/administration/administration.module#AdministrationModule'},
      { path: 'assistant', loadChildren: 'app/assistants/assistants.module#AssistantsModule' }
    ],
    canActivate: [AuthGuardService]
  },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'registration', loadChildren: 'app/registration/registration.module#RegistrationModule' },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    FeathersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
