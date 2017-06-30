import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { Patient } from '../shared/patient.model';
import { PatientsService } from '../shared/patients.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Observable<Patient[]>;  
  isLoading = false;
  selected: Patient;

  constructor(private service: PatientsService) { }

  ngOnInit() {
  	this.getPatients();
  }

  getPatients(){
  	this.isLoading = true;
  	this.patients = this.service.getPatients()
  						.finally(() => this.isLoading = false);
  	this.selected = undefined;
  }

  isSelected(){
  	return true;
  }

  select(patient: Patient){
  	this.selected = patient;
  }

}
