const BLOG = {
  title: 'NextCraft',
  author: 'Zuo Lan',
  link: 'https://next-craft.vercel.app',
  description: 'Using Craft.do pages as a blog',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F2F2F2', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  since: 2021, // If leave this empty, current year will be used.
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  craftConfigShareUrl: 'https://www.craft.do/s/8gQSdBtbuPjpp1', // The link to share your craft config
  notesNav: {
    index: 'Home',
    blog: 'My Blog',
    contact: 'Contact'
  },
  notesLink: {
    index: '/',
    blog: 'https://zuolan.me',
    contact: 'https://zuolan.me/contact'
  },
  socialLink: {
    twitter: 'https://twitter.com/izuolan',
    github: 'https://github.com/izuolan',
    telegram: 'https://t.me/zuolan'
  },
  seo: {
    keywords: ['Blog', 'Craft.do', 'Craft Docs', 'Next.js', 'TailwindCSS']
  },
  analytics: {
    provider: '', // Currently support Umami, fill with 'umami' to enable or leave it empty to disable it.
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '', // The website id of your Umami instance
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = BLOG
