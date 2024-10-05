
"use client";
import Feed from "@/components/feed";
import { motion } from "framer-motion"
import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york/ui/card";

export default function DashboardPage() {
    const { data: session } = useSession();
    const router = useRouter();
    const userId = session?.user.id;
   
    // if (userId) {
    //     toast.error('You have not logged in');
    //     router.push(`/login`);
    // }
  
  return (
     
    <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ ease: "easeOut" }}
        >
        <section className='flex-center w-full flex-col mb-20 md:mb-10'>
            <Feed />
        </section>
    </motion.div>
      
  )
}