import "@styles/globals.css";

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import  SessionProvider  from "@/components/Provider";
import { Toaster } from "react-hot-toast"

export const metadata = {
  title: "DevInsights",
  description: "Join the DevInsights Journey: Explore, Create, Share All the dev tools! ",
  icons: {
    icon: "/assets/images/logo1.svg",
  },
};

const RootLayout = ({ children }) => (
  <>
  <SessionProvider>
    <html lang="en" suppressHydrationWarning>
      
    <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
              <div className="my-10 flex-1">{children}</div>
            <SiteFooter />
          </div>
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
    </SessionProvider>
  </>
);

export default RootLayout;
