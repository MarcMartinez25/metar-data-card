import { IAirportRunways } from "./IAirportRunways"

export interface IAirportInfo {
  name: string,
  icao: string,
  time: string,
  availableRunways: IAirportRunways,
  location: string,
  latitude: number,
  longitude: number
}