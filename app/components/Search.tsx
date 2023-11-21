import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import {Input} from "@nextui-org/react";
const Search = () => {
  return (
    <Input
      isClearable
      radius="lg"
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "w-3/1"
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "dark:bg-default/60",
          "backdrop-blur",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
          "h-45"
        ],
        
      }}
      endContent ={
        <MagnifyingGlassIcon className=" text-default-400 pointer-events-none flex-shrink-0 h-6 w-6"/>
    }
      placeholder="Type to search..."
    
    ></Input>
  )
}

export default Search