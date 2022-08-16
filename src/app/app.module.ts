import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorLoginComponent } from './doctor/doctor-login/doctor-login.component';
import { DoctorRegistrationComponent } from './doctor/doctor-registration/doctor-registration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PolicyComponent } from './policy/policy.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorLogoutComponent } from './doctor/doctor-logout/doctor-logout.component';
import { PatienceComponent } from './patience/patience.component';
import { PatienceLoginComponent } from './patience/patience-login/patience-login.component';
import { PatienceRegistrationComponent } from './patience/patience-registration/patience-registration.component';
import { PatienceLogoutComponent } from './patience/patience-logout/patience-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorLoginComponent,
    DoctorRegistrationComponent,
    HomeComponent,
    AboutComponent,
    PolicyComponent,
    AppointmentComponent,
    DoctorLogoutComponent,
    PatienceComponent,
    PatienceLoginComponent,
    PatienceRegistrationComponent,
    PatienceLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
