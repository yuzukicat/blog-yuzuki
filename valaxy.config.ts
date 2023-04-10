import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: false,
        title: 'Cat, Yuzuki',
      cloud: {
        enable: false,
      },
    },

    colors: {
      primary: '#ED527D',
    },

    pages: [
      {
        name: 'Friends',
        url: '/friends/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2023,
      beian: {
        enable: false,
        icp: 'azure',
      },
    },
  },

  unocss: { safelist },
})
