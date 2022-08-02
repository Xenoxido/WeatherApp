import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityCardComponent } from './components/city-card/city-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
