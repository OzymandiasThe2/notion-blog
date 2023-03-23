const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Shriji Shah",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "information technology security developer",
    bio: "Leveling up my D&D character and securing your networks. Multitasking like a pro",
    email: "shrijishah@hotmail.com",
    linkedin: "shriji-shah-it",
    github: "OzymandiasThe2",
    instagram: "shahshriji",
  },
  projects: [
    {
      name: `shriji-blog`,
      href: "https://github.com/OzymandiasThe2/notion-blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "shriji-blog",
    description: "welcome to Shriji's Blog!",
    theme: "dark", // ['light', 'dark', 'auto']
  },

  // CONFIG configuration (required)
  link: "https://shriji-blog.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app/Security%20Nerd.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Favatar.svg", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion", 'Shriji Shah', 'Shriji'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "OzymandiasThe2/notion-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "88605fd6-9dff-4122-915b-68f1570b562a", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
