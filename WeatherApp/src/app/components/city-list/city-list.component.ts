import { Component, OnInit } from '@angular/core';
import { GeocodeService } from 'src/app/services/geocoding.service';
import { CityGeocode } from 'src/app/models/cityGeocode';
import { ForecastService } from 'src/app/services/forecast.service';
import { CityForecastCurrent } from 'src/app/models/cityForecastCurrent';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  cityName: string = '';
  cityList: CityGeocode[] = [];
  citySelected?: CityForecastCurrent;
  selectedCity : boolean = false;
  constructor( private _geocodeService: GeocodeService, private _forecastService: ForecastService) { }

  ngOnInit(): void {
  }

  findCities():void {
    this.selectedCity = false;
    this._geocodeService.getCityGeocodeByName(this.cityName).subscribe((cityGeocodeResults)=>{
      cityGeocodeResults.forEach((city)=>{
        this.cityList.push(city);
      });
    });
  }

  onClickCity(city:CityGeocode):void{
    this.selectedCity = true;
    this._forecastService.getForecastCurrent(city.latitude, city.longitude).subscribe((cityForecastCurrentResult)=>{
      this.citySelected = cityForecastCurrentResult;
    })
  }
}
