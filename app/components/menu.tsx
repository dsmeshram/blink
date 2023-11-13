

import React from 'react'

const MenuItem = () => {
  const person = [{

  }]

  return (
    <div className='bg-slate-300 table-cell'>
      <ul role="list" className="p-6 divide-y divide-slate-200">
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-slate-900">damo</p>
        <p className="text-sm text-slate-500 truncate">damo</p>
      </div>
    </li>
</ul>
    </div>
  )
}

export default MenuItem