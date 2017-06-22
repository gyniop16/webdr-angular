import { NgModule } from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsService } from './patients.service';
import { PatientsComponent } from './patients.component';

@NgModule({
  imports: [
    SharedModule,
    PatientsRoutingModule
  ],
  declarations: [PatientsComponent],
  providers: [PatientsService]
})
export class PatientsModule { }
