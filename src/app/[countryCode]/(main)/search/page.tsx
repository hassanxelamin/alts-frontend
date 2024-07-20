// import SearchModal from "@modules/search/templates/search-modal"

// export default function SearchModalRoute() {
//   return <SearchModal />
// }

import React from 'react'
import SearchBar from '@modules/search/components/search-bar/SearchBar'

const Search = () => {
  return (
    <div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
          <div className="h-full w-full flex flex-col items-center gap-4">
            <h1 className="tracking-tight w-[800px] text-[50px] sm:text-6xl font-bold text-center">Find affordable alternatives to luxury fashion.</h1>
            <div className="mx-auto mt-16 w-full max-w-2xk flex flex-col">
              <SearchBar />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Search
