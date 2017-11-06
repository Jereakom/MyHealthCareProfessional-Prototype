import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfessionalProfileComponent } from './professional-profile.component';
import { ProfessionalViewComponent } from './professional-view/professional-view.component';
import { SearchViewComponent } from './search-view.component';
import { PageNotFoundComponent } from './not-found.component';
import { CalendarModule } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfessionalComponent } from './professional/professional.component';

const appRoutes: Routes = [
  { path: 'professionals', component: ProfessionalViewComponent },
  { path: 'search', component: SearchViewComponent},
  { path: 'profile', component: ProfessionalProfileComponent},
  { path: '', redirectTo: '/professionals', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalViewComponent,
    PageNotFoundComponent,
    SearchViewComponent,
    ProfessionalProfileComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
