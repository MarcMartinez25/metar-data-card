import React from 'react'
import planeImage from '../assets/plane.svg'

const MetarCardEmptyState = () => (
  <div className='flex flex-grow justify-center mt-24'>
    <img src={planeImage} alt='not a plane' className=' w-1/3'></img>
  </div>
)

export default MetarCardEmptyState