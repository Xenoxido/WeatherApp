import { Injectable } from "@angular/core";
import { CityForecastCurrent } from "../models/cityForecastCurrent";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})

export class ForecastCurrentAdapter implements Adapter<CityForecastCurrent> {
    adapt(item: any): CityForecastCurrent{
        let temp = item.current_weather.temperature + ' ' + item.hourly_units.apparent_temperature;
        let apparent_temp = item.hourly.apparent_temperature[0] + ' ' + item.hourly_units.apparent_temperature;
        let humidity = item.hourly.relativehumidity_2m[0] + ' ' + item.hourly_units.relativehumidity_2m;
        let wind = item.current_weather.windspeed + ' km/h';
        let rain = item.hourly.rain[0] + ' ' + item.hourly_units.rain;
        let pressure = item.hourly.surface_pressure[0] + ' mb';
        let weather_code = item.current_weather.weathercode;
        return new CityForecastCurrent(temp, apparent_temp, humidity, wind, rain, pressure, weather_code);
    }
}