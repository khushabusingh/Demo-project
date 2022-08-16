import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patience } from '../patience';
import { PatienceService } from '../patience.service';

@Component({
  selector: 'app-patience-login',
  templateUrl: './patience-login.component.html',
  styleUrls: ['./patience-login.component.css']
})
export class PatienceLoginComponent implements OnInit {
  patient: Patience = new Patience("", "", "", "", "", "",  );
  constructor(private patienceservice : PatienceService , private router : Router) { }
  loginsubmit(loginFrom:NgForm){
    //console.log(this.patient=loginFrom.value);
     //this.router.navigate(['/appointment']);
     
     this.patienceservice.loginPatiencefromRemote(this.patient).subscribe(
       data =>{console.log("Response recieved");
       alert("login successfully")
       this.gotoDoctorDashboard();
     },
       error => console.log("Exception occured")
       );
     }
   
     gotoDoctorDashboard(){
       this.router.navigate(['/home'])
     }
  ngOnInit() {
  }

}
