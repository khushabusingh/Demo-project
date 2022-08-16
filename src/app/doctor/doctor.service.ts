import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  
 
  
  constructor(private httpClient: HttpClient) { }

  addPatient(patient: Doctor): Observable<Doctor[]> {
    console.log(patient);
     let url: string = "http://localhost:8085/api/create";
     return this.httpClient.post<Doctor[]>(url, patient);

}
// loginDoctorfromRemote(patient:Doctor):Observable<Doctor[]>{
//   console.log(patient);
//   let url:String="http://localhost:8085/api/"
// }
public loginDoctorfromRemote(patient: Doctor) :Observable<Doctor[]> {
  let url: string = "http://localhost:8085/api/login";
   return this.httpClient.post<Doctor[]>(url, patient);
}
}
