import { Metadata } from "next"
import Image from "next/image"
import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area"
import { Separator } from "@/registry/new-york/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"

import { AlbumArtwork } from "./components/album-artwork"
import { Menu } from "./components/menu"
import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder"
import { Sidebar } from "./components/sidebar"
import { listenNowAlbums, madeForYouAlbums } from "./data/albums"
import { playlists } from "./data/playlists"
import Feeds from "@/components/Feed"

export const metadata: Metadata = {
  title: "DevInsights",
  description: "developers posts",
}

export default function MusicPage() {
  return (
    <>
     
      <div className="block">
        {/* <Menu /> */}
        <div className="">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4">
                <div className="h-full px-4 py-6 lg:px-8">
                    <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                              <Feeds />
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
