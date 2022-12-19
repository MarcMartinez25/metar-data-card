import { IAirportRunways } from "./IAirportRunways"

export interface IAirportInfo {
  name: string,
  icao: string,
  availableRunways: Array<IAirportRunways>,
  location: string,
  latitude: number,
  longitude: number
}