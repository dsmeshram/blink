"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const GoogleSignIn = () => {
  // const {data : session} = useSession()

  // if (session && session.user){
  //   return (
  //     <div className='flex gap-4 ml-auto'>
  //       <p className='text-sky-600'>{session.user.name}</p>
  //       <button onClick={()=> signOut()} className='text-red-600'>
  //         Sign Out
  //       </button>
  //     </div>
  //   )
  // }
  const router = useRouter();
    const person = [{

    }]
  

  async function  handleClick(e : any) {
    e.preventDefault()
    const postDate = async () =>{
        const data = {
            name : "damodhar",
            email : "damodhar.meshra@gmail.com"
        }

        const response = await fetch("/api/user/",{
            method : "POST",
            body : JSON.stringify(data)
        })

        return response.json()
    };

    postDate().then((data)=>{
        if (data.status == 200){
            router.push('/pages/start');
        }
        else{
            alert("technical error please again later")
        }
    })
  }

  return (
    <button onClick={(e)=>handleClick(e)}
    className="middle none center mr-4 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  >
    Let started with
  </button>
  )
}

export default GoogleSignIn