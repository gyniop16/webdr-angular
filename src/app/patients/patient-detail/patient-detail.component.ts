import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';
import { FormBuilder, FormGroup, Validators }            from '@angular/forms';

import { Patient, Address } from '../shared/patient.model';
import { PatientsService } from '../shared/patients.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patient: Patient;

	patientForm: FormGroup;  
  errorMessage: any;

  constructor(private fb: FormBuilder,
              private router: Router,
              private service: PatientsService,
              private route: ActivatedRoute,
              private location: Location) {  	
  }

  ngOnInit() {
    this.createForm();
    this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getPatient(id)
              .subscribe(patient => {this.patient = patient; 
                                     this.ngOnChanges();},
                        error => this.errorMessage = error);
        });
    console.log(this.patient);
  }

  ngOnChanges() {
    this.patientForm.reset({
        firstName: this.patient.firstName,
        address: this.patient.addresses[0] || new Address()
      });
  }

  createForm(){
  	this.patientForm = this.fb.group({
  		firstName: ['', Validators.required ],
  		lastName: ['', Validators.required ],
      gender: '',
      dateOfBirth: '', //date
      maritalStatus: '',
      phone: '',
      email: '',
  		address : this.fb.group(new Address())
  	});
  }

    onSave() {
    //    this.service.update(this.patient)
    //       .then(() => this.onCancel());
    }

    onCancel() {
        this.location.back();
    }

}