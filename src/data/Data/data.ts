import { SiBuymeacoffee } from "react-icons/si"
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6"
import { SiBluesky } from "react-icons/si"

const chiragImage = "/assets/Images/pfps/myphoto.jpeg"
const chiragName = "Chirag Sharma"
const chiragAbout = `
  <p>
    Hey, I'm Chirag Sharma, a passionate full-stack developer who loves building applications that make a real impact.
  </p>
  <p>
    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I believe in continuous learning and pushing the boundaries of what's possible with code.
  </p>
  <p>
    If you're interested in collaborating on a project or just want to connect, feel free to reach out. I'm always open to new opportunities and interesting discussions!
  </p>
`

const chiragBio = "Full-Stack Developer"

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
    name: "Discord",
    link: "https://discord.gg/JgcDzHpWum",
    icon: FaDiscord,
  },
  {
    id: 4,
    name: "BuyMeACoffee",
    link: "https://buymeacoffee.com/rinkitadhana",
    icon: SiBuymeacoffee,
  },
]

const chiragFooterLink = [
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
    name: "Discord",
    link: "https://discord.gg/JgcDzHpWum",
    icon: FaDiscord,
  },
  {
    id: 4,
    name: "BuyCoffee",
    link: "https://buymeacoffee.com/damngruz",
    icon: SiBuymeacoffee,
  },
  {
    id: 5,
    name: "Bluesky",
    link: "https://bsky.app/profile/damngruz.bsky.social",
    icon: SiBluesky,
  },
]

const chiragContact =
  "I'm always excited to connect with fellow developers and tech enthusiasts. Feel free to reach out for collaborations, discussions, or just to say hello!"
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
]

export {
  chiragName as gruzName,
  chiragBio as gruzBio,
  chiragImage as gruzImage,
  chiragLink as gruzLink,
  chiragFooterLink as gruzFooterLink,
  chiragAbout as gruzAbout,
  chiragContact as gruzContact,
  chiragContactLink as gruzContactLink,
}
