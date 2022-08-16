import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patience-logout',
  templateUrl: './patience-logout.component.html',
  styleUrls: ['./patience-logout.component.css']
})
export class PatienceLogoutComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
    window.sessionStorage.clear();
    alert("You have successfully logged out");
    this.router.navigateByUrl("patience-registration")
  }

}
