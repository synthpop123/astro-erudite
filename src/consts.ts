import type { IconMap, SocialLink, Site, SubstatsItem } from '@/types'

export const SITE: Site = {
  title: "lkw123's Blog",
  description: 'Yet another personal blog',
  href: 'https://blog.lkwplus.com',
  author: 'lkw123',
  locale: 'zh-CN',
  featuredPostCount: 3,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/posts',
    label: 'posts',
  },
  {
    href: '/tags',
    label: 'tags',
  },
  {
    href: '/memos',
    label: 'memos',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/synthpop123',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/whoamamamiii',
    label: 'Twitter',
  },
  {
    href: 'mailto:hi@lkwplus.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

// Tech skills for About page
export const LANGUAGES_SKILLS = [
  'C/C++',
  'Python',
  'JavaScript',
  'Node.js',
  'Rust',
  'Golang',
  'Shell Script',
]

export const FRONTEND_SKILLS = [
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind CSS',
  'React',
  'Vue.js',
  'Astro',
]

export const BACKEND_SKILLS = ['Flask', 'Django', 'FastAPI', 'Express']

export const DATABASES_SKILLS = ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']

export const DEVOPS_SKILLS = [
  'Docker',
  'Kubernetes',
  'VMware',
  'Git/SVN',
  'Grafana',
  'Ansible',
]

export const MISC_SKILLS = ['Linux', 'MacOS', 'GraphQL', 'REST', 'Vim', 'Markdown']

// Substats items for about page
export const SUBSTATS: SubstatsItem[] = [
  {
    platform: 'GitHub',
    icon: 'lucide:github',
    link: 'https://github.com/synthpop123',
    text: 'followers',
    // api: 'github/synthpop123'
    count: 14,
  },
  {
    platform: 'Twitter/X',
    icon: 'lucide:twitter',
    link: 'https://x.com/whoamamamiii',
    text: 'followers',
    // api: 'twitter/whoamamamiii',
    count: 12,
  },
  {
    platform: 'Telegram',
    icon: 'tabler-brand-telegram',
    link: 'https://diary.lkwplus.com',
    text: 'subscribers',
    // api: 'telegram/lkw123_channel'
    count: 2,
  },
  {
    platform: 'Instagram',
    icon: 'lucide:instagram',
    link: 'https://www.instagram.com/whoamamiii',
    text: 'followers',
    // api: 'instagram/whoamamiii'
    count: 46,
  },
  {
    platform: 'Bilibili',
    icon: 'ri-bilibili-line',
    link: 'https://space.bilibili.com/229550302',
    text: 'subscribers',
    // api: 'bilibili/229550302',
    count: 240,
  },
  {
    platform: 'Zhihu',
    icon: 'ri-zhihu-line',
    link: 'https://www.zhihu.com/people/lkw555',
    text: 'followers',
    // api: 'zhihu/lkw555'
    count: 38,
  },
  {
    platform: 'Steam',
    icon: 'ri-steam-line',
    link: 'https://steamcommunity.com/id/nameless555/',
    text: 'games',
    // api: 'steamgames/76561199075380335'
    count: 19,
  },
  {
    platform: 'Mastodon',
    icon: 'iconoir-mastodon',
    link: 'https://mastodon.lkwplus.com/@lkw123',
    text: 'followers',
    // api: 'mastodon/lkw123@lkwplus.com'
    count: 0,
  },
]
