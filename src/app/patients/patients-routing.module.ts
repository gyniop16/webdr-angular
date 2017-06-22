import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { ContentComponent }    from '../shared';

const routes: Routes = [
	{ path: 'patients',
	           component: ContentComponent,
	           children: [
	           	{ path: '', component: PatientsComponent },
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
