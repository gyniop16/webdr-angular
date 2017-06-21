import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataMockService } from './data-mock-service';

import { AppComponent } from './app.component';

import { environment } from '../environments';

import { CoreModule }    from './core/core.module';

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
    CoreModule,
    AppRoutingModule,
    !environment.production ? InMemoryWebApiModule.forRoot(DataMockService) : [],    
    PatientsModule
  ],
  providers: [],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
