import React from 'react'
import Profile from './Profile'
import Search from './Search'
import profilePic from '../assets/icon-2.png'
import Image from 'next/image'
const Toolbar = () => {
  return (
    <div className='flex w-screen justify-between'>
      <div className='p-2 w-full items-center text pl-4 flex  gap-2'>
        <Image
          src={profilePic}
          width={40}
          height={40}
          alt="Picture of the author"></Image>
        <span className='text-xl font-semibold text-blue-700'>
          Blink
        </span>
      </div>
      <div className='p-2 w-full'>
        <Search></Search>
      </div>
      <div className='p-2 w-full'>

        <Profile></Profile>
      </div>
    </div>
  )
}

export default Toolbar