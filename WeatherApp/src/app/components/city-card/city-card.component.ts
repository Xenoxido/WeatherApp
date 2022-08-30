import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CityGeocode } from 'src/app/models/cityGeocode';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input() city: CityGeocode | undefined;

  @Output() selectCity: EventEmitter<CityGeocode> = new EventEmitter<CityGeocode>();

  constructor() { }

  ngOnInit(): void {
  }

  OnClick():void{
    this.selectCity.emit(this.city);
  }

}
