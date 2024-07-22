"use client";

import React, { useRef, useState, useTransition } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2, Camera } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation';

const SearchBar = () => {
    const searchParams = useSearchParams()
    const defaultQuery = searchParams. get("query") || ' '

    const inputRef = useRef<HTMLInputElement>(null);
    
    const [isSearching, startTransition] = useTransition();

    const router = useRouter();

    const [query, setQuery] = useState<string>(defaultQuery)

    const search = () => {
        startTransition(() => {
            router.push(`/search?query=${query}`)
        })
    }

    return (
        <div className='w-[592px] min-h-[48px] relative flex items-center'>
                <div className="flex justify-center items-center bg-black rounded-[30px] w-[113px] h-[39px] absolute left-[5px] z-10">
                    <div className='text-white font-bold'>alts.com/</div>
                </div>
                <Input 
                    disabled={isSearching}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            search()
                        }
                        if(e.key === "Escape") {
                            inputRef?.current?.blur()
                        }
                    }} 
                    ref={inputRef} 
                    placeholder='enter link or just search...'
                    className="pl-[125px] pr-[48px] h-full rounded-[30px] border-black" 
                />
                <Button disabled={isSearching} size='sm' onClick={search} className='absolute right-0 inset-y-0 h-full rounded-1-none'>
                    {isSearching ? <Loader2 className='h-6 w-6 animate-spin' /> : <Camera className='h-6 w-6' />}
                </Button>
        </div>
    )
}

export default SearchBar