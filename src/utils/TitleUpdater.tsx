"use client"

import { usePathname } from "next/navigation"
import { rinkitName } from "@/data/ChiragData/data"

export const TitleUpdater = () => {
  const pathname = usePathname()

  const getTitle = () => {
    const baseTitle = rinkitName
    if (pathname === "/") return baseTitle
    if (pathname.startsWith("/writings")) return `Writings | ${baseTitle}`
    if (pathname.startsWith("/lab")) return `Lab | ${baseTitle}`
    return baseTitle
  }

  if (typeof document !== "undefined") {
    document.title = getTitle()
  }

  return null
}
