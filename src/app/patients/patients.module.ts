import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsService } from './patients.service';
import { PatientsComponent } from './patients.component';

@NgModule({
  imports: [
    CommonModule,
    PatientsRoutingModule
  ],
  declarations: [PatientsComponent],
  providers: [PatientsService]
})
export class PatientsModule { }
