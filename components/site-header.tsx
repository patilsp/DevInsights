"use client";

import Link from "next/link"

import { siteConfig } from "@/config/site"

import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import  Nav  from "@/components/Nav"
import { motion } from "framer-motion"
import { FiBell } from 'react-icons/fi'

import Lottie from "lottie-react"
import animationData from "app/assets/logo.json"

export function SiteHeader() {

  return (
    <header className="sticky top-0 z-50 w-full px-2 shadow text-gray-8 00 backdrop-blur">
      <div className="flex h-14 p-1 items-center">

      <Link href='/' className='flex gap-2 flex-center'>
          <div style={{ width: '40px', height: '40px' }}>
            <Lottie animationData={animationData} />
          </div>
        <p className='logo_text animate font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center mr-2'>DevInsights</p>
      </Link>
     
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
            <div className="inline-flex justify-center items-center whitespace-nowrap rounded-lg  hover:bg-slate-900  py-2 mt-1 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 cursor-pointer float-right">
              <FiBell size={24}  /> 
            </div>
          </div>
          <div className="flex items-center gap-2">             
       
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )
}
