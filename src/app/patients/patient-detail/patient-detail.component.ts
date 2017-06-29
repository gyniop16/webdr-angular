import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }            from '@angular/forms';
import { Patient, Address } from '../shared/patient.model';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

	patientForm: FormGroup;

  constructor(private fb: FormBuilder) {  	
  }

  ngOnInit() {
    this.createForm();
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

}