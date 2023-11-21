import { useSession } from 'next-auth/react';

import { Launchpad } from './components/Launchpad';


export default function Home() {

  return (
    <main >
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a04168] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
          </div>
          <div className="mx-auto max-w-2xl py-22 sm:py-28 lg:py-16">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our 1st beta release. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Creating you from <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Your Brand</span></h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">Welcome to <span className="">Blink</span> – the ultimate solution for seamless social media posting. Simultaneously share content across platforms, schedule posts, and manage media effortlessly. Simplify your social presence now!</p>
              <br></br>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Let's start with </h1>
              <br></br>
              <br></br>
              <div className='justify-items-center'>
                <Launchpad></Launchpad>
              </div>

            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
          </div>
        </div>
      </div>



    </main>
  )
}
