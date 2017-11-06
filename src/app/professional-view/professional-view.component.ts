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
    //this.professionals = this.professionalService.getProfessionals();
    this.professionalService.getProfessionals().then(professionals => this.professionals = professionals);
  }

  onSelect(professional: Professional, date): void {
    alert("You selected " +professional.name+"! The date is "+date+", and the price for the appointment is "+professional.price+" euro.");
  }

  ngOnInit(): void {
    this.getProfessionals();
  }

}
