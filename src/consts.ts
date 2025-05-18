export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'crash0v3rr1d3.xyz',
  DESCRIPTION:
    'sec researcher.',
  EMAIL: 'crash0v3rr1d3@icloud.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 4,
  SITEURL: 'https://crash0v3rr1d3.xyz',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
  { href: '/writeups', label: 'writeups' },
  // { href: '/authors', label: 'authors' },
  // { href: '/about', label: 'about' },
  // { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/xxx', label: 'GitHub' },
  { href: 'https://x.com/xxx_', label: 'Twitter' },
  { href: 'crash0v3rr1d3@icloud.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
