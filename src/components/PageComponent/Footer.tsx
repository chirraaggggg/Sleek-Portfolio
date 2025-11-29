"use client"
import { rinkitFooterLink, rinkitShortName } from "@/data/ChiragData/data"

const Footer = () => {
  return (
    <footer className="md:mb-12 mb-16">
      <div className="border-t border-zinc-700 my-6" />
      <div className="flex flex-col gap-2.5 items-center">
        <div className="flex flex-wrap gap-4 items-center md:text-base text-sm">
          {rinkitFooterLink.map((link) => (
            <a
              key={link.id}
              className="select-none md:text-base text-xl hover:opacity-75 flex gap-1 items-center transition duration-100"
              target="_blank"
              rel="noopener noreferrer"
              href={link.link}
            >
              <link.icon /> <span className="hidden md:block">{link.name}</span>
            </a>
          ))}
        </div>
        <p className="text-sm">
          © 2025 {rinkitShortName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
