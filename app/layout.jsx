import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
import SessionProvider from "@components/Provider";
import { Toaster } from "react-hot-toast"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "DevInsights",
  description: "Join the DevInsights Journey: Explore, Create, Share All the dev tools! ",
  icons: {
    icon: "/assets/images/logo1.svg",
  },
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <SessionProvider>
        <main className='app'>
          <Toaster />
          <SiteHeader />
          {children}
          <Footer />
        </main>

      </SessionProvider>
    </body>
  </html>
);

export default RootLayout;
