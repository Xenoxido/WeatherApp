import { Component, Input, OnInit } from '@angular/core';
import { CityForecastCurrent } from 'src/app/models/cityForecastCurrent';

@Component({
  selector: 'app-city-current',
  templateUrl: './city-current.component.html',
  styleUrls: ['./city-current.component.scss']
})
export class CityCurrentComponent implements OnInit {

  @Input() cityCurrent : CityForecastCurrent | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
