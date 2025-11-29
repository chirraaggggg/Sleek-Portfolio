"use client"
import dynamic from "next/dynamic"

const Projects = dynamic(() => import("../PageComponent/Projects"), { ssr: false })
const Writings = dynamic(() => import("../PageComponent/Writings"), { ssr: false })
const Newsletter = dynamic(() => import("../PageComponent/Newsletter"), { ssr: false })
const SupportMe = dynamic(() => import("../PageComponent/SupportMe"), { ssr: false })

export default function LazyClientSections() {
  return (
    <>
      <Projects />
      <Writings />
      <Newsletter />
      <SupportMe />
    </>
  )
}