import { Component, OnInit, Input } from '@angular/core';
import { CityForecast } from 'src/app/models/cityForecast';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent implements OnInit {

  @Input() city: CityForecast | undefined;

  constructor () { }

  ngOnInit(): void {
  }
}
