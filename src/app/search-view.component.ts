import { Component } from '@angular/core';

@Component({
  templateUrl: './search-view.component.html'
})
export class SearchViewComponent {

  displayProfessionals(): void {
    window.location.replace("/professionals");
  }

}
