"use client"

import * as React from "react"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from 'next/navigation'

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"

import Lottie from"lottie-react";
import animationData from "@/assets/google.json";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { data: session } = useSession();
  const router = useRouter();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }



  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

 
  
  // const handleSignIn = async (providerId) => {
  //   const result = await signIn(providerId, { callbackUrl: '/user-dashboard' });
  
  // };
  


  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white rounded-sm px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className='flex relative'>
        {session?.user ? (
          <div className='flex'>
              {router.push('/user-dashboard')}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (

                <Button 
                  className="w-full"
                  variant="outline" 
                  type="button" 
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                 disabled={isLoading}>
                  {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Lottie animationData={animationData} className="mr-2 h-8 w-8" />  
                  )}{" "}
                  Google
                </Button>


                // <Button
                //   type='button'
                //   key={provider.name}
                //   onClick={() => {
                //     signIn(provider.id);
                //   }}
                //   className='black_btn'>
                //   Sign in
                // </Button>
              ))}
          </>
        )}
      </div>
      
    </div>
  )
}
