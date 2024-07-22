import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Search from "./search/page"
import Nav from "@modules/layout/templates/nav"
import SearchBar from '@modules/search/components/search-bar/SearchBar'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
        <div className="h-full w-full flex flex-col items-center gap-4">
          <h1 className="tracking-tight w-[800px] text-[50px] sm:text-6xl font-bold text-center">Find affordable alternatives to luxury fashion.</h1>
          <div className="mx-auto mt-16 w-full max-w-2xk flex item-center justify-center">
            <SearchBar />
          </div>
        </div>
      </div>
      {props.children}
      {/* <Footer /> */}
    </>
  )
}
