"use client"
import SectionTitle from "../SectionTitle"
import { rinkitContact, rinkitContactLink } from "@/data/ChiragData/data"

const ReachOut = () => {
  const contact = rinkitContact
  const contactLink = rinkitContactLink

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="Reach out to me" />
      <div className=" flex flex-col gap-2.5">
        <p>{contact}</p>
        <div>
          <div className=" flex flex-wrap items-center gap-2">
            {contactLink.map((link) => (
              <a 
                key={link.id} 
                target="_blank" 
                rel="noopener noreferrer"
                href={link.link}
                className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-800/80 transition-colors duration-200 px-3 py-1.5 rounded-md border border-zinc-700/50"
              >
                <link.icon className="text-lg" />
                <span className="text-white text-sm">{link.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReachOut
