import { siteConfig } from "@/config/site"
import { FiYoutube, FiGithub, FiX, FiFacebook, FiInstagram } from 'react-icons/fi';

export function SiteFooter() {
  return (
    <footer className="py-2 md:py-0">
      <div className="flex flex-col items-center justify-between gap-4 py-4">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.portfolio}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Santosh Patil
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <div className="mb-10 flex w-full justify-center gap-2">
        <div className="glassIcon"><FiFacebook className=""></FiFacebook></div>
        <div className="glassIcon"><FiInstagram className=""></FiInstagram></div>
        <div className="glassIcon"><FiYoutube className=""></FiYoutube></div>
        <div className="glassIcon"><FiX className=""></FiX></div>
        <div className="glassIcon"><FiGithub className=""></FiGithub></div>


      </div>
    </footer>
  )
}
