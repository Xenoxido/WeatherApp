import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherLabel'
})
export class WeatherLabelPipe implements PipeTransform {

  transform(value: number): string {
    switch(value){
      case 0:
        return "Clear sky";
      case 1:
        return "Mainly clear"
      case 2:
        return "Partly cloudy"
      case 3:
        return "Overcast";
      case 45:
        return "Fog";
      case 48:
        return "Depositing rime fog";
      case 51:
        return "Drizzle: Light";
      case 53:
        return "Drizzle: Moderate";
      case 55:
        return "Drizzle: Dense";
      case 56:
        return "Freezing Drizzle: Light";
      case 57:
        return "Freezing Drizzle: Dense";
      case 61:
        return "Rain: Slight";
      case 63:
        return "Rain: Moderate";
      case 65:
        return "Rain: Heavy";
      case 66:
        return "Freezing Rain: Light";
      case 67:
        return "Freezing Rain: Heavy";
      default:
        return "Not found";
    }
  }

}
