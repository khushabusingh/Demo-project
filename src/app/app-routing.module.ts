import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorLoginComponent } from './doctor/doctor-login/doctor-login.component';
import { DoctorLogoutComponent } from './doctor/doctor-logout/doctor-logout.component';
import { DoctorRegistrationComponent } from './doctor/doctor-registration/doctor-registration.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { PatienceLoginComponent } from './patience/patience-login/patience-login.component';
import { PatienceLogoutComponent } from './patience/patience-logout/patience-logout.component';
import { PatienceRegistrationComponent } from './patience/patience-registration/patience-registration.component';
import { PatienceComponent } from './patience/patience.component';
import { PolicyComponent } from './policy/policy.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"policy",component:PolicyComponent},
  {path:"doctor",component:DoctorComponent,
children:[
  {path:"doctor-login",component:DoctorLoginComponent},
  {path:"doctor-registration",component:DoctorRegistrationComponent},
  {path:"doctor-logout",component:DoctorLogoutComponent}
]},
{path:"appointment",component:AppointmentComponent},
{path:"patience",component:PatienceComponent,
children:[
  {path:"patience-login",component:PatienceLoginComponent},
  {path:"patience-registration",component:PatienceRegistrationComponent},
  {path:"patience-logout",component:PatienceLogoutComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
