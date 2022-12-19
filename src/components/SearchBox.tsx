import React from 'react'
import { ISearchBox } from '../types/ISearchBox'

const SearchBox = ({
  icaoCode,
  setIcaoCode,
  placeholder,
  hint
}: ISearchBox) => (
  <>
    <input
      value={icaoCode}
      onChange={(e) => setIcaoCode(e.target.value)}
      type='text'
      required
      placeholder={placeholder}
      className='border-4 rounded-lg p-4 mr-4 border-blue-700 focus:border-blue-500 text-gray-300 bg-slate-900'>
    </input>
    <p className='
        flex 
        text-xs 
        text-gray-300 
        ml-2 
        mt-1'>
      {hint}
    </p>
  </>
)


export default SearchBox