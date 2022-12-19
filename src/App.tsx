import { useCallback, useState } from 'react'
import axios from 'axios'
import planeImage from './assets/plane.svg'
import NavBar from './components/NavBar'
import SearchBox from './components/SearchBox'
import SearchButton from './components/SearchButton'
import { API_URL, AXIOS_OPTIONS, DECODED } from './shared/CONSTANTS'
import MetarCard from './components/MetarCard'
import MetarCardEmptyState from './components/MetarCardEmptyState'

function App() {
  const [showIcon, setShowIcon] = useState(true)
  const [icaoCode, setIcaoCode] = useState('')
  const [airports, setAirports] = useState([])

  const getMetarData = () => {
    const request = API_URL + icaoCode + DECODED
    axios.get(request, AXIOS_OPTIONS).then((res) => {
      const response = res.data
      console.log(response)
    })
  }


  return (
    <div className='container mx-auto mt-4 mb-8 '>
      <NavBar />

      <div className='flex flex-grow justify-center my-8'>
        <div>
          <form onSubmit={useCallback(() => { getMetarData }, [])} >
            <div className='flex flex-row'>
              <div>
                <SearchBox
                  icaoCode={icaoCode}
                  setIcaoCode={setIcaoCode}
                  placeholder='Enter ICAO Code'
                  hint='Ex. KAUS, KHOU, 50R, EGLL'
                />
              </div>
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
      <MetarCard />

      {airports.length <= 0 ? <MetarCardEmptyState /> : (
        <div className='flex flex-col-reverse'>
          {airports.map((airport) => (
            <MetarCard />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
