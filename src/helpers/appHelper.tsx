import { IAirport } from "../types/IAirport"

export const formatData = (response: any) => {

  const dateString = response.observed
  const date = new Date(dateString)

  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()


  const airport: IAirport = {
    info: {
      name: response.station.name,
      icao: response.icao,
      time: `${day}/${month}/${year}`,
      availableRunways: {
        bearingFrom: 0,
        bearingTo: 0
      },
      location: response.station.location,
      latitude: response.station.geometry.coordinates[0].toString().substring(0, 8),
      longitude: response.station.geometry.coordinates[1].toString().substring(0, 9)
    },
    weather: {
      flightCategory: response.flight_category,
      altimeter: response.barometer.hg,
      temperature: response.temperature.celsius,
      dewpoint: response.dewpoint.celsius,
      relativeHumidity: response.humidity.percent,
      visibility: response.visibility.miles,
      windSpeed: response.wind.speed_kts,
      windDirection: response.wind.degrees,
      clouds: response.clouds[0].text
    }
  }

  return airport
}