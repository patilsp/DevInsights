"use client"

import * as React from "react"

import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/registry/new-york/ui/button";
import { Input } from "@/registry/new-york/ui/input";
import { Label } from "@/registry/new-york/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york/ui/card";
import { toast } from "react-hot-toast";

import Lottie from "lottie-react";
import animationData from "@/assets/google.json";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { data: session } = useSession();
  const router = useRouter();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const userId = session?.user.id;
   
  if (userId) {
      toast.success('You have logged in already');
      router.push(`/`);
  }



  return (
    <div className={cn("flex justify-center items-center", className)} {...props}>
      
      <Card className="w-full max-w-md mx-auto shadow-lg p-6 sm:p-8">
      
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold tracking-tight">Sign In</CardTitle>
          <div className="flex flex-col space-y-2 text-center">
  
            <p className="text-sm text-muted-foreground mb-10">
              Enter your email below to create your account
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-2">
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  className="w-full"
                />
              </div>
              <Button className="w-full">               
                Sign In with Email
              </Button>
            </div>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="flex justify-center">
            {providers && Object.values(providers).map((provider) => (
              <Button
                className="w-full flex items-center justify-center"
                variant="outline"
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Lottie animationData={animationData} className="mr-2 h-8 w-8" />
                )}
                {provider.name}
              </Button>
            ))}
          </div>
          <div className="mt-5 text-center text-sm">
              Don't have an account?{" "}
              <Link href="/sign-up" className="underline text-blue-500 hover:text-blue-700">
                Sign up
              </Link>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}
