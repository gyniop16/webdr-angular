import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataMockService } from './data-mock-service';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';

import { environment } from '../environments';

import { CoreModule } from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/*Features*/
import { PatientsModule } from './patients/patients.module';

import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    LoginRoutingModule,
    AppRoutingModule,
    HttpModule,
    !environment.production ? InMemoryWebApiModule.forRoot(DataMockService) : [],    
    PatientsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [],
  exports: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
