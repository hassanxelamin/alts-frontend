// import SearchModal from "@modules/search/templates/search-modal"

// export default function SearchModalRoute() {
//   return <SearchModal />
// }

import React from 'react'

const Search = () => {
  return (
    <div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
          <div className="h-full w-full flex flex-col items-center gap-4">
            <h1 className="tracking-tight text-4xl sm:text-6xl font-bold">MagicSearch</h1>
            <p className="max-w-xl text-center text-lg text-slate-700">
              A beautifully designed, hybrid search engine that enhances search accuracy by querying semantically related results.
            </p>
            <div className="mx-auto mt-16 w-full max-w-2xk flex flex-col">
              {/* <SearchBar /> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Search
