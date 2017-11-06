import { Component, OnInit } from '@angular/core';

export class Professional {
  id: number;
  name: string;
  picture: string;
  sex: string;
  languages: string;
  experience: string;
  price: number;
  location: string;
}

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
