
import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area"

import Feeds from "@/components/Feed"

export default function Page() {
  return (
    <>     
     <div className="relative">
        <ScrollArea>
          <Feeds />
        </ScrollArea>
      </div>
    </>
  )
}
