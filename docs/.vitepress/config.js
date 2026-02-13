import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PlexSphere',
  description: 'PlexSphere Documentation',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/plexsphere/plexsphere.github.io' }
    ]
  }
})
