import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ContentComponent } from '../shared';

import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [{ path: 'patients',
 component: ContentComponent,
 canActivate: [AuthGuard],
 children: [
  { path: '',
    component: PatientsComponent,
    canActivateChild: [AuthGuard],
    children: [
     { path: '', component: PatientListComponent },
     { path: ':id', component: PatientDetailComponent }
    ]
  },

	             /*{ path: '', component: PatientListComponent },
	             { path: 'create', component: PatientCreateComponent },
	             { path: ':id', component: PatientEditComponent }*/
 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
