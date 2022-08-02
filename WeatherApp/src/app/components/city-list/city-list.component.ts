import { Component, OnInit } from '@angular/core';
import { GeocodeService } from 'src/app/services/geocoding.service';
import { Cities } from 'src/app/data/cities';
import { CityGeocode } from 'src/app/models/cityGeocode';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  cityList: CityGeocode[] = [];
  constructor( private _geocodeService: GeocodeService) { }

  ngOnInit(): void {
    Cities.forEach((cityName) => {
      this._geocodeService.getCityGeocodeByName(cityName).subscribe((cityGeocodeResults)=>{
        this.cityList.push(cityGeocodeResults[0]); // Only appends the first city with the searching name
      });
    });
  }
}
