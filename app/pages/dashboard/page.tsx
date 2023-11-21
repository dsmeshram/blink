"use client"

import Analysis from '@/app/components/Analysis';
import Apps from '@/app/components/Apps';
import Events from '@/app/components/Events';
import SideBar from '@/app/components/Sidebar';
import Toolbar from '@/app/components/Toolbar'
import { defaultNavItems } from '@/app/components/defaultNavItems';
import React, { useEffect, useState } from 'react'

const DashboardPage = () => {

  const [Menu, setMenu] = useState("0");

  function menuselect(menu : any){
    setMenu(menu.currentKey)

  }

  return (

    <div className=" h-screen w-screen">
      <div className=''>
        <Toolbar></Toolbar>
      </div>
      <div className='flex h-[calc(100vh-80px)] '>
        <SideBar menuselect={menuselect}></SideBar>
        <div className=' p-4 m-4  border-small rounded-small border-default-300 dark:border-default-300 w-[calc(100vw-350px)]'>
         {Menu=="1"&& <Events></Events>}
         {Menu=="2"&& <Apps></Apps>}
         {Menu=="0"&& <Analysis></Analysis>}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage