import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataMockService } from './data-mock-service';

import { AppComponent } from './app.component';

import { environment } from '../environments';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    !environment.production ? InMemoryWebApiModule.forRoot(DataMockService) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
