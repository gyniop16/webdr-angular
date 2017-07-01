import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataMockService } from './data-mock-service';

import { AppComponent } from './app.component';

import { environment } from '../environments';

import { CoreModule }    from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/*Features*/
import { PatientsModule } from './patients/patients.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpModule,
    !environment.production ? InMemoryWebApiModule.forRoot(DataMockService) : [],    
    PatientsModule
  ],
  providers: [],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
