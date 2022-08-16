import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
  patient: Doctor = new Doctor("", "", "", "", "", "",  );
  
  constructor(private patienceservice : DoctorService , private router : Router) { }
  
  loginsubmit(loginFrom:NgForm){
   //console.log(this.patient=loginFrom.value);
    //this.router.navigate(['/appointment']);
    
    this.patienceservice.loginDoctorfromRemote(this.patient).subscribe(
      data =>{console.log("Response recieved");
      alert("login successfully")
      this.gotoDoctorDashboard();
    },
      error => console.log("Exception occured")
      );
    }
  
    gotoDoctorDashboard(){
      this.router.navigate(['/appointment'])
    }

  ngOnInit() {
  }
// loginsubmit(loginFrom:NgForm){

//   if(this.patient.email === 'khushi@gmail.com' && this.patient.password === '2724') {
//     alert("Login Successful")
//     console.log("hii")
//     //this.sellerService.setLoggedInFlag(true);
//     window.sessionStorage.setItem("loggedin-email",this.patient.email);
//     window.sessionStorage.setItem("loggedin-status","loggedin");
//     this.router.navigateByUrl("/home");
//   }
//   else {
//     alert("Incorrect username or password");
//   }
// }
}
