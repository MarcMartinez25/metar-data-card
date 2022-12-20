import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NavBar = () => {
  return (
    <div className='mb-12'>
      <div className='flex bg-blue-700 text-gray-300 font-semibold rounded-md p-4 items-center'>
        <p className='flex-grow-0 text-lg'>METAR DATA</p>
        <div className='flex-grow'></div>
        <div className='flex-grow-0 text-gray-300'><a href="https://github.com/MarcMartinez25/ForeFlight-Project" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={['fab', 'github-alt']} size="2x" /></a></div>
      </div>
    </div>
  )
}


export default NavBar