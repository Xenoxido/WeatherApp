export class CityForecastCurrent {
    temp: string;
    apparent_temp: string;
    humidity: string;
    wind: string;
    rain: string;
    pressure: string;
    weather_code: number;

    constructor(temp:string, apparent_temp:string, humidity:string, wind: string, rain: string, pressure: string, weather_code: number){
        this.temp = temp;
        this.apparent_temp = apparent_temp;
        this.humidity = humidity;
        this.wind = wind;
        this.rain = rain;
        this.pressure = pressure;
        this.weather_code = weather_code;
    }
}