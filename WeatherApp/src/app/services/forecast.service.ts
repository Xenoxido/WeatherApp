import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityForecastCurrent } from '../models/cityForecastCurrent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ForecastCurrentAdapter } from '../adapters/forecastCurrentAdapter';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private baseUrl: string = 'https://api.open-meteo.com/v1/forecast';

  constructor(private _http: HttpClient, private _forecastCurrentAdapter: ForecastCurrentAdapter) { }

  getForecastCurrent(latitude:number, longitude:number): Observable<CityForecastCurrent> {
    return this._http.get<CityForecastCurrent>(`${this.baseUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m,apparent_temperature,rain,surface_pressure`)
    .pipe( map((data: any)=> this._forecastCurrentAdapter.adapt(data) ));
  }
}
