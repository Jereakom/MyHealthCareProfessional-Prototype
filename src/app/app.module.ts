import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfessionalViewComponent } from './professional-view/professional-view.component';
import { SearchViewComponent } from './search-view.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'professionals', component: ProfessionalViewComponent },
  { path: 'search', component: SearchViewComponent},
  { path: '', redirectTo: '/professionals', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalViewComponent,
    PageNotFoundComponent,
    SearchViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
