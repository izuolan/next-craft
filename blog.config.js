const BLOG = {
  title: 'NextCraft',
  author: 'Zuo Lan',
  link: 'https://next-craft.vercel.app',
  description: 'Use Craft.do pages as a blog',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F2F2F2', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  postPath: 'post', // Set subpath, /<post>/custom-craft-docs-path
  since: 2021, // If leave this empty, current year will be used.
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://og-zl.vercel.app', // The link to generate OG image, don't end with a slash
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
    keywords: ['Craft.do', 'Craft Docs', 'Next.js', 'TailwindCSS', 'Blog']
  },
  analytics: {
    provider: 'umami', // Currently support Umami, fill with 'umami' to enable or leave it empty to disable it.
    umamiConfig: {
      scriptUrl: 'https://monitor.zuolan.me/monitor.js', // The url of your Umami script
      websiteId: '06a854f1-baed-43e4-b5c4-b398d17f9e24', // The website id of your Umami instance
    }
  },
  craftConfigShareUrl: 'https://www.craft.do/s/8gQSdBtbuPjpp1', // The link to share your craft config
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '263895784', // The chat id of your Telegram bot
  supabaseUrl: 'https://fhoajfqegfiadonmhzig.supabase.co', // The url of your Supabase instance
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTgwNzMxNywiZXhwIjoxOTQ3MzgzMzE3fQ.0PGPwiORFsKRthFFxnXrI53x9_T6jSxt3y98Daxgng4', // The anonymous key of your Supabase instance
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = BLOG
