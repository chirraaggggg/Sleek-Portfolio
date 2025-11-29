"use client"
import { rinkitAbout } from "@/data/ChiragData/data"
import SectionTitle from "../SectionTitle"

const AboutMe = () => {
  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="About Me" />
      <div className="flex flex-col gap-2">
        <div
          dangerouslySetInnerHTML={{
            __html: rinkitAbout,
          }}
          className="flex flex-col gap-1"
        />
      </div>
    </section>
  )
}

export default AboutMe
