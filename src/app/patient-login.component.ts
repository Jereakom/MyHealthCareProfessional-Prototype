import { Component } from '@angular/core';

@Component({
  templateUrl: './patient-login.component.html'
})
export class PatientLoginComponent {

  login(uname: string, pwd: string): void {
    alert("Logged in as "+uname+"!");
    window.location.replace("/search");
  }

}
