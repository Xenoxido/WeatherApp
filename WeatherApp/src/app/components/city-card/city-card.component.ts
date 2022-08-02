import { Component, Input, OnInit } from '@angular/core';
import { CityGeocode } from 'src/app/models/cityGeocode';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input() city: CityGeocode | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
