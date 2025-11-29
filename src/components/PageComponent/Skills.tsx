"use client"

import { useEffect, useState } from "react"
import SectionTitle from "../SectionTitle"
import { skills as allSkills } from "@/data/Common/data"

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex flex-col gap-2">
        <SectionTitle title="Skills & Tools" />
        <div className="flex flex-wrap gap-1.5">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-8 w-24 bg-zinc-800/50 rounded-md animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <SectionTitle title="Skills & Tools" />
      <div className="flex flex-wrap gap-1.5">
        {allSkills.map((skill) => (
          <div 
            key={skill.id} 
            className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-800/80 transition-colors duration-200 px-3 py-1.5 rounded-md border border-zinc-700/50"
          >
            <skill.icon 
              className="text-lg" 
              style={{ color: skill.color }} 
            />
            <span className="text-white text-sm">{skill.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills