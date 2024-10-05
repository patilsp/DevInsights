"use client"
import Link from 'next/link'
import Image from 'next/image'
import Lottie from "lottie-react"
import animationData from "@/assets/not-found.json"

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center">       
      <h1 className="mx-auto text-center text-red-400 mt-10">Not Found</h1>     
      <p className="mx-auto my-4 max-w-3xl text-center text-lg"> Could not find requested resource </p>


       <div className='flex w-full h-full justify-center'>
            <div style={{ width: '340px', height: '240px' }}>
              <Lottie animationData={animationData} />
            </div>
        </div>
        <div className='w-100 mt-4 flex justify-center'>
          <Link href="/posts" className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" >Return Home</Link>
        </div>
    </div>
  )
}