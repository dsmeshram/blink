"use client"

import React from 'react'
import GitHubSignIn from './GitHubSignIn';
import GoogleSignIn from './GoogleSignIn';
import UserProfile from './userProfile';
import { useSession } from 'next-auth/react';
export const Launchpad = () => {

  const { data: session } = useSession()

  console.log("session", session)
  if (session) {
    return (

        <UserProfile></UserProfile>
 
    )
  } else {
    return (
      <div className='flex items-center space-x-4'>
        <GoogleSignIn></GoogleSignIn>
        <GitHubSignIn></GitHubSignIn>
      </div>
    )
  }

}
