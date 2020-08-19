module.exports = {
  siteTitle: 'FM Digi',
  siteDescription: 'Welcome to FM Digi',
  authorName: 'FM Digi',
  twitterUsername: 'fm_digi',
  authorAvatar: 'fmdigi.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  FM Digi is new to the Football Manager scene. Has always loved sport simulation games, he fell in 
  love with Football Manager in 2018. Creating content on Twitch and YouTube since 2019 and developed
  his own USA pro/rel database for the launch of FM20.
  `,
  siteUrl: 'https://fmdigi.cc/',
  disqusSiteUrl: 'https://fmdigi.cc/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '', //'/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'blogHeader.png', // file in content/images
  googleAnalyticsId: 'UA-171527051-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: 'fm-digi',
  headerTitle: 'FM Digi',
  headerLinksIcon: 'baymax.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    // {
    //   label: 'About',
    //   url: '/about-gatsby-starter-morning-dew',
    // },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    // {
    //   sectionName: 'Explore',
    //   links: [
    //     {
    //       label: 'Blog',
    //       url: '/',
    //     },
    //     {
    //       label: 'About',
    //       url: '/about-gatsby-starter-morning-dew',
    //     },
    //     {
    //       label: 'Installation',
    //       url: '/how-to-install',
    //     },
    //   ],
    // },
    {
      sectionName: 'Follow the author',
      links: [
        // {
        //   label: 'GitHub',
        //   url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
        // },
        // {
        //   label: 'Website',
        //   url: 'https://fmdigi.cc',
        // },
        {
          label: 'YouTube',
          url: 'https://youtube.com/c/fmdigi',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/fm_digi',
        },
        {
          label: 'Facebook',
          url: 'https://facebook.com/fmdigi',
        },
        {
          label: 'Twitch',
          url: 'https://twitch.com/fmdigi',
        },
      ],
    },
  ],
}
