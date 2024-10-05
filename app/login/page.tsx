"use client"

import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { UserAuthForm } from "./components/user-auth-form"
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/assets/men.json";


export default function Page() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center mb-10">
        {/* Left Side - Form Section */}
        <div className="flex items-center justify-center p-6 sm:p-10 md:p-16 lg:p-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full max-w-lg mx-auto"
          >
            <div className="flex flex-col justify-center space-y-6">
              
              <div className="p-4">
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

        {/* Right Side - Lottie Animation */}
        {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:flex items-center justify-center p-10"
        >
          <Lottie animationData={animationData} className="w-full max-w-md" />
        </motion.div> */}
      </div>
    </>
  );
}
