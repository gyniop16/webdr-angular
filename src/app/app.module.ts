import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataMockService } from './data-mock-service';

import { AppComponent } from './app.component';

import { environment } from '../environments';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/*Features*/
import { PatientsModule } from './patients/patients.module';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    !environment.production ? InMemoryWebApiModule.forRoot(DataMockService) : [],    
    PatientsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
