"use client"
// Profile image is now directly referenced
import Image from "next/image"
import { navLinks } from "@/data/Common/data"
import { InfoTipNav } from "../InfoTipNav"
import { useState } from "react"

const Nav = () => {
  const [isArrowVisible, setIsArrowVisible] = useState(true)

  const handleArrowVisibility = () => {
    setIsArrowVisible(false)
  }

  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center items-center">
      <div className="relative bg-mainBlack border border-zinc-700 px-3 py-2 rounded-xl flex items-center gap-3">
        <div className="flex gap-4 items-center">
          {navLinks.map((nav) => (
            <InfoTipNav key={nav.id} text={nav.name}>
              <a className="" href={nav.link}>
                {<nav.icon />}
              </a>
            </InfoTipNav>
          ))}
        </div>
        <div className="h-8 w-[1px] bg-zinc-500 mr-1"></div>
        <div
          className="rounded-md md:hover:brightness-75 transition duration-200"
          onMouseEnter={handleArrowVisibility}
        >
          <Image
            src="/assets/Images/pfps/myphoto.jpeg"
            alt="Profile Picture"
            className="rounded-full w-9 h-9 object-cover"
            width={36}
            height={36}
          />
        </div>
        {isArrowVisible && (
          <div id="arrow" className="absolute -bottom-9 right-0">
            <Image
              src="/assets/Images/gif/arrow.gif"
              alt="arrow"
              className="size-12"
              width={100}
              height={100}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav
