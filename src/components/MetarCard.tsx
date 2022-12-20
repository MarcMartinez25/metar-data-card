import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IAirport } from '../types/IAirport'


const MetarCard = ({ info, weather }: IAirport) => (
  <div className='flex flex-grow justify-center mt-8'>
    <div className='flex flex-col justify-between bg-blue-700 rounded-lg p-8 -my-1  text-white z-10 w-1/4 shadow-2xl'>
      <div>
        <div className='flex items-baseline'>
          <p className='text-2xl'>{info.name}</p>
          <p className='text-sm text-gray-200 ml-1'>{info.icao}</p>
        </div>
        <p className='text-base'><FontAwesomeIcon icon={['fas', 'clock']} /> {info.time}</p>
        <p className='text-sm'><FontAwesomeIcon icon={['fas', 'compass']} /> {info.longitude}/{info.latitude}</p>
      </div>
      <div className='mt-24'>
        <div className='mb-2'>
          {weather.flightCategory === "VFR"
            ? <FontAwesomeIcon icon={['fas', 'sun']} size='2x' />
            : <FontAwesomeIcon icon={['fas', 'cloud']} size='2x' />
          } {weather.flightCategory}
        </div>
        <div className='text-xl'>{weather.temperature}&deg;C/{weather.dewpoint}&deg;C</div>
      </div>
    </div>

    <div className='flex flex-col justify-between bg-gray-700 rounded-md -mx-2 p-6 text-white z-0 w-1/3 text-xl shadow-xl'>
      <div>
        <div className='flex flex-row justify-between'>
          <p>Wind Speed:</p>
          <p>{weather.windSpeed} kts</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p>Wind Direction: </p>
          <p>{weather.windDirection}&deg;</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p>Cloud Coverage: </p>
          <p>{weather.clouds}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p>Visibility: </p>
          <p>{weather.visibility} SM</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p>Humidity: </p>
          <p>{weather.relativeHumidity} %</p>
        </div>
      </div>
      {/* <div>
        <h2 className=' text-2xl mt-8'>Runways Available</h2>
        <div className=' text-base pt-2'>
          {airport.info.runways.map((x) => (
            <div className='flex items-center'>
              <FontAwesomeIcon icon={['fas', 'road']} /><p className='ml-2'> {x.ident}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  </div>
)

export default MetarCard