"use client"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { UserAuthForm } from "@/app/authentication/components/user-auth-form"
import Lottie from"lottie-react";
import animationData from "@/assets/animation1.json";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
      
      <div className="relative h-[680px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 mb-10 animation-delay">
        
        <div className="relative flex-col p-10 text-white lg:flex">
          <div className="absolute inset-0  bg-background/95" />
          <div className="text-card-foreground">
            <div className="flex justify-center"> 
              <Lottie animationData={animationData} />                     
            </div>            
          </div>        
        </div>
        <div className="relative lg:p-8 p-4 animation-up-left">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
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
        </div>
      </div>
    </>
  )
}
