"use client"

import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { UserAuthForm } from "./components/user-auth-form"
import { motion } from "framer-motion";
import Lottie from"lottie-react";
import animationData from "@/assets/men.json";

export default function Page() {
  return (
    <>
      
      <div className="relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 mb-10 ">
        
        <div className="relative flex-col p-4 text-white lg:flex">
          <div className="absolute inset-0 " />
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Initial animation properties
            animate={{ opacity: 1, x: 0 }}     // Animation properties when element enters
            transition={{ duration: 1, delay: 1 }}       // Animation duration
          >
          <div className="text-card-foreground">
            <div className="flex justify-center"> 
              <Lottie animationData={animationData} />                     
            </div>            
          </div>   
          </motion.div>     
        </div>
        
        
        <div className="relative p-2">
        <motion.div
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}    
            transition={{ duration: 1, delay: 1 }} 
          >
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[375px] mb-28 md:mb-0">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl  tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <div className="relative p-4">            
                <UserAuthForm />             
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
