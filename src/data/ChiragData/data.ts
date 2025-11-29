import { FaDiscord, FaLinkedinIn } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
// import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"
import { MdOutlineMail } from "react-icons/md"
import { SiBluesky } from "react-icons/si"

const chiragImage = "/assets/Images/pfps/chirag.jpg"
const chiragName = "Chirag Sharma"
const chiragShortName = "Chirag"
const chiragBio = "Software Engineer"
const chiragAbout = `
  <p>
    Hey! I'm Chirag Sharma, a passionate software engineer who loves building innovative solutions and turning ideas into reality.
  </p>
  <p>
    I'm proficient in modern web technologies and enjoy working with Next.js, React, and TypeScript to create seamless user experiences.
  </p>
  <p>
    I love contributing to open-source projects and have actively participated in multiple hackathons, where I collaborate, build, and solve real-world problems.
  </p>
`

const chiragLink = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/rinkitadhana",
    icon: FaGithub,
  },

  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },

  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rinkitadhana",
    icon: FaLinkedinIn,
  },

  {
    id: 4,
    name: "LeetCode",
    link: "https://leetcode.com/u/rinkitadhana",
    icon: SiLeetcode,
  },
]

const chiragContact =
  "I'm always open to interesting discussions and collaborations. Feel free to reach out to me via email or connect with me on social media!"
const chiragContactLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Discord",
    link: "https://discord.gg/JgcDzHpWum",
    icon: FaDiscord,
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:therinkit@gmail.com",
    icon: MdOutlineMail,
  },
]

const chiragFooterLink = [
  {
    id: 1,
    name: "Mail",
    link: "mailto:therinkit@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/rinkitadhana",
    icon: FaGithub,
  },

  {
    id: 3,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rinkitadhana",
    icon: FaLinkedinIn,
  },
  {
    id: 5,
    name: "LeetCode",
    link: "https://leetcode.com/u/rinkitadhana",
    icon: SiLeetcode,
  },
  // {
  //   id: 6,
  //   name: "Instagram",
  //   link: "https://www.instagram.com/rnkktt",
  //   icon: FaInstagram,
  // },
  {
    id: 6,
    name: "Bluesky",
    link: "https://bsky.app/profile/chiragsharma.bsky.social",
    icon: SiBluesky,
  },
]

export {
  chiragImage,
  chiragName,
  chiragShortName,
  chiragBio,
  chiragAbout,
  chiragLink,
  chiragContact,
  chiragContactLink,
  chiragFooterLink,
}

export {
  chiragImage as rinkitImage,
  chiragBio as rinkitBio,
  chiragContact as rinkitContact,
  chiragContactLink as rinkitContactLink,
  chiragName as rinkitName,
  chiragShortName as rinkitShortName,
  chiragAbout as rinkitAbout,
  chiragLink as rinkitLink,
  chiragFooterLink as rinkitFooterLink,
}
