import { Component, OnInit } from '@angular/core';

import { Professional } from './professional';

import { ProfessionalService } from './professional.service';

@Component({
  templateUrl: './professional-profile.component.html',
  providers: [ProfessionalService]
})

export class ProfessionalProfileComponent implements OnInit {

  constructor(private professionalService: ProfessionalService) { }

  professionals: Professional[];

  getProfessionals(): void {
    //this.professionals = this.professionalService.getProfessionals();
    this.professionalService.getProfessionals().then(professionals => this.professionals = professionals);

  }

  add(name: string, sex: string, language: string, experience: string, price: number, location: string): void {
    var id = this.professionals.length;
    name = name.trim();
    sex = sex.trim();
    language = language.trim();
    experience = experience.trim();
    location = location.trim();
    if (!id || !name || !sex || !language || !experience || !price || !location) {
      alert("Missing info!");
      return;
    }
    this.professionalService.create(id, name, sex, language, experience, price, location)
        .then(professional => {
          this.professionals.push(professional);
        });
  }

  ngOnInit(): void {
      this.getProfessionals();

    }
}
