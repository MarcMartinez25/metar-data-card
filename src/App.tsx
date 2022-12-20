import { useState } from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import SearchBox from './components/SearchBox'
import SearchButton from './components/SearchButton'
import MetarCard from './components/MetarCard'
import MetarCardEmptyState from './components/MetarCardEmptyState'
import { formatData } from './helpers/appHelper'
import { IAirport } from './types/IAirport'

const AXIOS_OPTIONS = {
  headers: { "X-API-Key": "f419ee367c914e7b94134a009f" }
}

const App = () => {
  const [icaoCode, setIcaoCode] = useState('')
  const [airports, setAirports] = useState<IAirport[]>([])

  const getMetarData = (event: any) => {
    event.preventDefault()
    const url = "https://api.checkwx.com/metar/" + icaoCode + "/decoded"
    axios.get(url, AXIOS_OPTIONS).then((res) => {
      const response = res.data.data[0]
      const data = formatData(response)
      console.log(response)
      setAirports([...airports, data])
    })
  }


  return (
    <div className='container mx-auto mt-4 mb-8 '>
      <NavBar />

      <div className='flex flex-grow justify-center my-8'>
        <div>
          <form onSubmit={getMetarData} >
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

      {airports.length < 0 ? "" : (
        <div className='flex flex-col-reverse'>
          {airports.map((airport) => (
            <MetarCard info={airport.info} weather={airport.weather} />
          ))}
        </div>
      )}

      <MetarCardEmptyState />
    </div>
  )
}

export default App
