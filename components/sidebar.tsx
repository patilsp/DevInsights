"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, label: 'My Feeds', href: '/dashboard' },
  { icon: Settings, label: 'Trending', href: '/dashboard/trending' },
  { icon: Users, label: 'All News', href: '/dashboard/dashboard' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  { icon: Settings, label: 'Top Stories', href: '/dashboard/top-stories' },
  { icon: Settings, label: 'Bookmarks', href: '/dashboard/bookmark' },
  
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  const pathname = usePathname()

  return (
    <motion.div
      className={cn(
        "flex flex-col border-r dark:text-white shadow-sm h-screen",
        expanded ? "w-40" : "w-20"
      )}
      animate={{ width: expanded ? 256 : 80 }}
    >
      <div className="flex items-center justify-between p-4 ml-2">
        {expanded && (
          <motion.h1
            className="text-xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Dashboard
          </motion.h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className="self-end"
        >
          {expanded ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>

      <ScrollArea className="flex-grow">
        <nav className="flex flex-col gap-2 p-4">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  !expanded && "justify-center"
                )}
              >
                <item.icon className="h-5 w-5" />
                {expanded && (
                  <motion.span
                    className="ml-2"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </motion.div>
  )
}