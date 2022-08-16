import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patience } from '../patience';
import { PatienceService } from '../patience.service';

@Component({
  selector: 'app-patience-registration',
  templateUrl: './patience-registration.component.html',
  styleUrls: ['./patience-registration.component.css']
})
export class PatienceRegistrationComponent implements OnInit {
  patience:Patience=new Patience("","","","","","")
  constructor(private patienceService:PatienceService,private router:Router) { }
  onsubmit(regForm:NgForm) {
    console.log(this.patience=regForm.value);
    this.patienceService.addPatience(this.patience).subscribe(data => {
      alert("Successfully Patient is registered ");
      this.gotoListPatient();
    }, error => alert("Sorry Patient is already  registered by same email choose different email Id")
    );
  }
  gotoListPatient() {
    this.router.navigate(['/patience/patience-login'])
  }
  ngOnInit() {
  }

}
