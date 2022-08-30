import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityForecast } from '../models/cityForecast';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private baseUrl: string = 'https://api.open-meteo.com/v1/forecast';

  constructor(private _http: HttpClient) { }

  getForecast(latitude:number, longitude:number): Observable<CityForecast> {
    return this._http.get<CityForecast>(`${this.baseUrl}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
    .pipe( map((data: any)=> new CityForecast() )); // TODO
  }
}
