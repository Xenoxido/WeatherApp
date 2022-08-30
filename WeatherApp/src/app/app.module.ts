import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { FormsModule } from '@angular/forms';
import { CityCurrentComponent } from './components/city-current/city-current.component';
import { CityDailyComponent } from './components/city-daily/city-daily.component';
import { WeatherLabelPipe } from './pipes/weather-label.pipe';
import { WeatherImagePipe } from './pipes/weather-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityCardComponent,
    CityCurrentComponent,
    CityDailyComponent,
    WeatherLabelPipe,
    WeatherImagePipe
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
