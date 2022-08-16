import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {
  patient: Doctor = new Doctor("", "", "", "", "", "",  );
  constructor(private patientservice: DoctorService, private router: Router) { }
  onsubmit(regForm:NgForm) {
    console.log(this.patient=regForm.value);
    this.patientservice.addPatient(this.patient).subscribe(data => {
      alert("Successfully Patient is registered ");
      this.gotoListPatient();
    }, error => alert("Sorry Patient is already  registered by same email choose different email Id")
    );
  }
  gotoListPatient() {
    this.router.navigate(['/doctor/doctor-login'])
  }
  ngOnInit() {
  }
  
}
