import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { FormBuilder, FormGroup, Validators }            from '@angular/forms';
import 'rxjs/add/operator/switchMap';

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
    this.route.paramMap
        .switchMap((params: ParamMap) => this.service.getPatient(+params.get('id')))
        .subscribe(patient => { 
                                this.patient = patient; 
                                this.ngOnChanges();
                              },
                        error =>{
                                  this.errorMessage = error;
                                  
                                });    
    console.log(this.patient);
  }

  ngOnChanges() {
    this.patientForm.reset({
        firstName: this.patient.firstName,
        lastName: this.patient.lastName,
        gender: this.patient.gender,
        dateOfBirth: this.patient.dateOfBirth,
        maritalStatus: this.patient.maritalStatus,
        phone: this.patient.phone,
        email: this.patient.email,
        address: this.patient.address || new Address()
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

    save() {
      this.patient = this.prepareSavePatient();
      if(this.patient.id && this.patient.id != 0){
        console.log("Saving patient");
        console.log(this.patient);
        //this.service.updatePatient(this.patient.id, this.patient);
        this.service.updatePatient(this.patient.id, this.patient)
          .subscribe(/* error handling */);
          this.ngOnChanges();
      }else{

      }
    //    this.service.update(this.patient)
    //       .then(() => this.onCancel());
    }

    onCancel() {
        this.location.back();
    }

    revertChanges(){
      this.ngOnChanges();
    }

    prepareSavePatient(): Patient {
      const formModel = this.patientForm.value;

      // deep copy of form model lairs
      //const addresses: Address[] = formModel.addresses.map(
      //  (address: Address) => Object.assign({}, address)
      //);

      // return new `Patient` object containing a combination of original hero value(s)
      // and deep copies of changed form model values
      const savePatient: Patient = {
        id: this.patient.id,
        //name: formModel.name as string,
        firstName: formModel.firstName as string,
        lastName: formModel.lastName as string,
        gender: formModel.gender as string,
        dateOfBirth: formModel.dateOfBirth as string, //date
        maritalStatus: formModel.maritalStatus as string,
        phone: formModel.phone as string,
        email: formModel.email as string,
        address : formModel.address

        // addresses: formModel.secretLairs // <-- bad!
        //addresses: addresses
      };
      return savePatient;
    }

}