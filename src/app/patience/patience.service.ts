import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patience } from './patience';

@Injectable({
  providedIn: 'root'
})
export class PatienceService {

  constructor(private httpClient:HttpClient) { }
  addPatience(patient: Patience): Observable<Patience[]> {
    console.log(patient);
     let url: string = "http://localhost:8085/doctor/create";
     return this.httpClient.post<Patience[]>(url, patient);

}
public loginPatiencefromRemote(patient: Patience) :Observable<Patience[]> {
  let url: string = "http://localhost:8085/doctor/login";
   return this.httpClient.post<Patience[]>(url, patient);
}
}
