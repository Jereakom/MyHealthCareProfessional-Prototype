import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfessionalViewComponent } from './professional-view/professional-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
