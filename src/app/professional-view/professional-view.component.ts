import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';



var apiKey = environment.apiKey;

export class Professional {
  id: number;
  name: string;
  picture: string;
  sex: string;
  languages: string[];
  experience: string[];
  price: number;
  location: string;
}

const PROFESSIONALS: Professional[] = [
  {
    id: 1,
    name: 'Penny Professional',
    picture: 'https://api.adorable.io/avatars/100/pennyprofessional.png',
    sex: 'Female',
    languages: ['English','Finnish'],
    experience: ['First experience', 'Second experience'],
    price: 50,
    location: 'Random address 1'
  },
  {
    id: 2,
    name: 'John Johnners',
    picture: 'https://api.adorable.io/avatars/100/johnjonners.png',
    sex: 'Male',
    languages: ['English','Finnish'],
    experience: ['First experience', 'Second experience'],
    price: 26,
    location: 'Random address 2'
  },
  {
    id: 3,
    name: 'Test Testersson',
    picture: 'https://api.adorable.io/avatars/100/testtestersson.png',
    sex: 'Female',
    languages: ['English','Finnish'],
    experience: ['First experience', 'Second experience'],
    price: 70,
    location: 'Random Address 3'
  }
];


@Component({
  selector: 'app-professional-view',
  templateUrl: './professional-view.component.html',
  styleUrls: ['./professional-view.component.css']
})
export class ProfessionalViewComponent implements OnInit {

  constructor() { }

  selectedProfessional: Professional;

  professionals = PROFESSIONALS;

  onSelect(professional: Professional, date): void {
    alert("You selected " +professional.name+"! The date is "+date+", and the price for the appointment is "+professional.price+" euro.");
  }

  ngOnInit() {
  }

}
