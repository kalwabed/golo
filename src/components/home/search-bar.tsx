import { useSetAtom } from 'jotai'
import { useState } from 'react'

import { searchState } from '../../store/search'

const SearchBar = () => {
  const setSearchAtom = useSetAtom(searchState)
  const [search, setSearch] = useState('')

  const handleOnChange = event => {
    setSearch(event.target.value)
    setSearchAtom(event.target.value)
  }

  return (
    <div className="flex justify-center items-center mb-8">
      <input
        type="text"
        value={search}
        onChange={handleOnChange}
        placeholder="Search user..."
        className="py-2.5 px-4 rounded-lg border-transparent flex-1 appearance-none border border-yellow-500 max-w-full md:max-w-md bg-yellow-300 text-gray-700 placeholder-yellow-600 shadow-sm hover:border-yellow-600 focus:outline-none focus:ring ring-yellow-700 focus:border-transparent transition"
      />
    </div>
  )
}

export default SearchBar
