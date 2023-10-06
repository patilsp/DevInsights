import React from 'react'
import Image from "next/image"

function page() {
  return (
    <div className="p-2">
      
       <div className='flex justify-center mb-2'>
           <h1 className=" text-4xl tracking-tight font-extrabold sm:text-5xl text-white">Coming Soon!
               Stay tuned for soon launch !
           </h1>
       </div>
       <div className='flex justify-center'>
           <p className="mt-6 text-lg text-center max-w-3xl mx-auto text-slate-400"> Exciting Changes Ahead! Our website is currently under construction, and we're working hard to bring you a brand new experience. Stay tuned for our upcoming launch and get ready for something amazing!  </p>
       </div>

       <div className='w-full flex-center'>
          <Image
            src='/assets/images/website-maintenance.svg'
            width={500}
            height={560}
            alt='loader'
            className='object-contain'
          />
        </div>

    </div>
  )
}

export default page

