import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { appointment } from './appointment';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  nameList=['Dr kamal','Dr sima','Dr pushpa'];
//  selected="Dr kamal"
appoint:appointment=new appointment("",null,null,"");
todayDate:Date = new Date();
  constructor(private appointmentService:AppointmentService,private router:Router) { }

  ngOnInit() {
  }
  onsubmit(appFrom:NgForm){
    console.log(this.appoint=appFrom.value);
    //  this.router.navigate(['/home'])
}

}
