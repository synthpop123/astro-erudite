export type Site = {
  title: string
  description: string
  href: string
  author: string
  locale: string
  featuredPostCount: number
  postsPerPage: number
}

export type SocialLink = {
  href: string
  label: string
}

export type IconMap = {
  [key: string]: string
}

// Item for Substats component
export type SubstatsItem = {
  platform: string
  icon: string
  color?: string
  link?: string
  text: string
  api?: string
  count?: number
}
