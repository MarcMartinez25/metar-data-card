import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { IAirport } from '../types/IAirport'
// airport: IAirport goes as a prop

const MetarCard = () => (
  <div className='flex flex-grow justify-center mt-8'>
    <div className='flex flex-col justify-between bg-blue-700 rounded-lg p-8 -my-1  text-white z-10 w-1/4 shadow-2xl'>
      <div>
        <div className='flex items-baseline'>
          <p className='text-2xl'>Sundance Airport</p>
          <p className='text-sm text-gray-200 ml-1'>KHSD</p>
        </div>
        <p className='text-base'><FontAwesomeIcon icon={['fas', 'clock']} /> TIME</p>
        <p className='text-sm'><FontAwesomeIcon icon={['fas', 'compass']} /> LATITUDE / LONGITUDE</p>
      </div>
      <div className='mt-24'>
        <div className='mb-2'><FontAwesomeIcon icon={['fas', 'sun']} size='2x' /> FLIGHT RULES ICON</div>
        <div className='text-xl'>TEMP 10&deg;C / HUMIDITY 10%</div>
      </div>
    </div>

    <div className='flex flex-col justify-between bg-gray-700 rounded-md -mx-2 p-6 text-white z-0 w-1/3 text-xl shadow-xl'>
      <div>
        <div className='flex flex-row justify-between'>
          <p>Wind Speed:</p>
          <p>10 kts</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p>Wind Direction: </p>
          <p>10&deg;</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p>Cloud Coverage: </p>
          <p>CLOUD COVERAGE</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p>Visibility: </p>
          <p>10 SM</p>
        </div>
      </div>
      <div>
        <h2 className=' text-2xl mt-8'>Runways Available</h2>
        {/* <div className=' text-base pt-2'>
          {airport.info.runways.map((x) => (
            <div className='flex items-center'>
              <FontAwesomeIcon icon={['fas', 'road']} /><p className='ml-2'> {x.ident}</p>
            </div>
          ))}
        </div> */}
        <div></div>
      </div>
    </div>
  </div>
)

export default MetarCard