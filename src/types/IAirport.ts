import { IAirportInfo } from "./IAirportInfo"
import { IAirportWeather } from "./IAirportWeather"

export interface IAirport {
  info: IAirportInfo,
  weather: IAirportWeather
}
