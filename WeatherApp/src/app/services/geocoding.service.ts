import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GeocodeAdapter } from '../adapters/geocodeAdapter';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CityGeocode } from '../models/cityGeocode';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  private baseUrl = 'https://geocoding-api.open-meteo.com/v1/search';

  constructor(private _http: HttpClient, private _geocodeAdapter: GeocodeAdapter) { }

  getCityGeocodeByName( name:string ) : Observable<CityGeocode[]>{
    return this._http.get<CityGeocode[]>(`${this.baseUrl}?name=${name}`).pipe(
      map((data: any) => data.results.map((item: any) => this._geocodeAdapter.adapt(item) )));
  }
}
