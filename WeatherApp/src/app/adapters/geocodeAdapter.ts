import { Injectable } from "@angular/core";
import { CityGeocode } from "../models/cityGeocode";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})

export class GeocodeAdapter implements Adapter<CityGeocode> {
    adapt(item: any){
        return new CityGeocode(item.name, item.latitude, item.longitude, item.elevation);
    }
}