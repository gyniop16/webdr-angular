import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

  patients: Patient[];  
  isLoading = false;  
  errorMessage: any;
  private selectedId: number;


  constructor(
    private service: PatientsService,
    private router: Router,   
    private route: ActivatedRoute) { }

  ngOnInit() {    
  	this.getPatients();
    this.route.params.forEach((params: Params) => {
        this.selectedId = +params['id'];
    });
  }

  getPatients(){
  	this.isLoading = true;
  	this.service.getPatients()
              .subscribe(patients => this.patients = patients,
                        error => this.errorMessage = <any>error );
  	this.selectedId = undefined;
  }

  isSelected(patient: Patient){
  	return patient.id === this.selectedId;
  }

  onSelect(patient: Patient){
  	this.router.navigate(['/patients', patient.id], { relativeTo: this.route });
  }

}
