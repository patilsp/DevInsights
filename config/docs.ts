// config/docs.ts
import { NavItem } from "types/nav";

interface DocsConfig {
  mainNav: NavItem[];
  sidebarNav: NavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "My Feeds",
      href: "/user-dashboard",
    },
    {
      title: "All News",
      href: "/",
    },
   
     {
      title: "Top Stories",
      href: "/",
    },
    {
      title: "Trending",
      href: "/",
    },
    {
      title: "Bookmarks",
      href: "/",
    },
   
    
  ],
  sidebarNav: [
    {
      title: "General",
      items: [
        {
          title: "Help",
          href: "/helps",
        },
        {
          title: "Settings",
          href: "/forms",
        },
        {
          title: "Sign In",
          href: "/authentication",
        },
      ],
    },
  ],
};
