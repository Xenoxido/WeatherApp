export class CityGeocode {
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;

    constructor ( name: string, latitude: number, longitude: number, elevation:number){
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.elevation = elevation;
    }
}