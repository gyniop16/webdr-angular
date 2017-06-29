import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }            from '@angular/forms';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

	patientForm: FormGroup;

  constructor(private fb: FormBuilder) {
  	this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
  	this.patientForm = this.fb.group({
  		firstName: ['', Validators.required ],
  	});
  }

}