import { NgModule } from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsService } from './shared/patients.service';
import { PatientsComponent } from './patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
  imports: [
  	ReactiveFormsModule,
    SharedModule,
    PatientsRoutingModule
  ],
  declarations: [PatientsComponent, PatientDetailComponent, PatientListComponent],
  providers: [PatientsService]
})
export class PatientsModule { }
