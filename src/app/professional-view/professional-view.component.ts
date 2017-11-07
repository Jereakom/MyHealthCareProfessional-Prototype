import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

import { Professional } from '../professional';

import { ProfessionalService } from '../professional.service';

@Component({
  selector: 'app-professional-view',
  templateUrl: './professional-view.component.html',
  styleUrls: ['./professional-view.component.css'],
  providers: [ProfessionalService]
})
export class ProfessionalViewComponent implements OnInit {

  constructor(private professionalService: ProfessionalService) { }

  professionals: Professional[];

  getProfessionals(): void {
    this.professionalService.getProfessionals().then(professionals => this.professionals = professionals);
  }

  getTop5(): void {
    this.professionalService.getTop5().then(professionals => this.professionals = professionals);
  }

  onSelect(professional: Professional, date): void {

    console.log(date);

    alert("You selected " +professional.name+"! The appointment is on "+date+", and the price for the appointment is "+professional.price+" euro.");
    //document.location.replace("/search");
  }

  showAllProfessionals(): void{
    this.professionalService.getProfessionals().then(professionals => this.professionals = professionals);
    console.log(this.professionals);
  }

  ngOnInit(): void {
    this.getTop5();
  }

}
