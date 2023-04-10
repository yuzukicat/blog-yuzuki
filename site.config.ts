import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://kamisu66.com/',
  lang: 'en',
  title: 'A Cat knows human language',
  subtitle: '',
  description: '',
  author: {
    name: 'yuzuki.cat',
    avatar: './public/4705775.png',
    email: 'yuzuki.cat@kamisu66.com',
    link: 'https://kamisu66.com',
  },
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'E-Mail',
      link: 'mailto:yuzuki.cat@kamisu66.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/yuzukicat',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/sarayuzuki',
      icon: 'i-mdi-linkedin',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: true,
    type:'fuse',
  },

  statistics: {
    enable: true,
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: 'Ethereum',
        url: './public/ethereum.jpg',
        color: '#00A3EE',
        icon: 'i-mdi-ethereum',
      },
      {
        name: 'Toncoin',
        url: 'toncoin.jpg',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
    ],
  },
})
