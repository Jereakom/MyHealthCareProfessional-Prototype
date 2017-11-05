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

@Component({
  selector: 'app-professional-view',
  templateUrl: './professional-view.component.html',
  styleUrls: ['./professional-view.component.css']
})
export class ProfessionalViewComponent implements OnInit {

  constructor() { }

  professional: Professional = {
      id: 1,
      name: 'Penny Professional',
      picture: 'https://api.adorable.io/avatars/100/pennyprofessional.png',
      sex: 'Female',
      languages: ['English','Finnish'],
      experience: ['First experience', 'Second experience'],
      price: 50,
      location: 'https://www.google.com/maps/embed/v1/place?key='+apiKey+'&q=65.012662,25.469119'
    };

  ngOnInit() {
  }

}
