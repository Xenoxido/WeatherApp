import { Component, OnInit } from '@angular/core';
import { GeocodeService } from 'src/app/services/geocoding.service';
import { CityGeocode } from 'src/app/models/cityGeocode';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  cityName: string = '';
  cityList: CityGeocode[] = [];
  selectedCity : boolean = false;
  constructor( private _geocodeService: GeocodeService) { }

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
  }
}
