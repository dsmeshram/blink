"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
const GoogleSignIn = () => {


  const router = useRouter();

  async function handleClick(e: any) {
    e.preventDefault()
    const postDate = async () => {
      const data = {
        name: "damodhar",
        email: "damodhar.meshra@gmail.com",
        password: "password"
      }

      const response = await fetch("/api/signin/", {
        method: "POST",
        body: JSON.stringify(data)
      })

      return response.json()
    };

    postDate().then((data) => {
      if (data.status == 200) {
        router.push('/pages/dashboard');
      }
      else {
        alert("technical error please again later")
      }
    })
  }

  return (
      <button
        type="button" onClick={() => signIn("google")}
        className="flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 border border-pink-200 hover:border-transparent rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-red-600 p-2"
        >
          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
        </svg>
        Sign up with Google
      </button>
  )
}

export default GoogleSignIn