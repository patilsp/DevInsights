"use client";

import Link from "next/link"

import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { motion } from "framer-motion"
import { FiBell } from 'react-icons/fi'
import  Nav  from "@/components/Nav"
import Lottie from "lottie-react"
import animationData from "app/assets/logo.json"
import { Button } from "@/registry/new-york/ui/button"
import { BellIcon, EyeNoneIcon, PersonIcon } from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import Image from "next/image"

export function SiteHeader() {
  
   return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full shadow border-b-slate-900 backdrop-blur">
      <div className="flex h-14 items-center px-2">
        {/* <MobileNav /> */}
        <Link href='/' className='flex-center gap-2 hidden md:flex'>
            <Image 
              src="/images/logo.svg"
              className="obtain-image mr-2"
              width={60}
              height={60}
              />
        </Link>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <ModeToggle />
          <nav className="">           
              <Nav />         
          </nav>
        </div>
      </div>
    </header>
  )
}
