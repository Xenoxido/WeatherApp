import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { FormsModule } from '@angular/forms';
import { CityInfoComponent } from './components/city-info/city-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityCardComponent,
    CityInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
