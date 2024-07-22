// import SearchModal from "@modules/search/templates/search-modal"

// export default function SearchModalRoute() {
//   return <SearchModal />
// }

import React from 'react'
import SearchBar from '@modules/search/components/search-bar/SearchBar'

interface PageProps {
  searchParams: {
      [key: string]: string | string[] | undefined
  }
}

const Search = ({searchParams}: PageProps) => {
  const query = searchParams.query
  return (
    <div>{query}</div>
  )
}

export default Search
