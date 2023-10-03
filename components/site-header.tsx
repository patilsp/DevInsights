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

import { BellIcon, EyeNoneIcon, PersonIcon } from "@radix-ui/react-icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"

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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 py-2 w-8 px-0 mt-2 ml-1">
                
                  <FiBell size={24}  /> 
              
                </Button>
              </DropdownMenuTrigger>
      
              <DropdownMenuContent className="w-100 py-4 px-4" align="end" forceMount>
              <Card className="border-none">
            <CardHeader className="pb-3">
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Choose what you want to be notified about.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-1">
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                <BellIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Everything</p>
                  <p className="text-sm text-muted-foreground">
                    Email digest, mentions & all activity.
                  </p>
                </div>
              </div>
              <div className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
                <PersonIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Available</p>
                  <p className="text-sm text-muted-foreground">
                    Only mentions and comments.
                  </p>
                </div>
              </div>
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                <EyeNoneIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Ignoring</p>
                  <p className="text-sm text-muted-foreground">
                    Turn off all notifications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </DropdownMenuContent>
      </DropdownMenu>
      
            
          </div>
          {/* <ModeToggle /> */}
          <div className="flex items-center gap-2"> 
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )
}
