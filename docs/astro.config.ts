import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightCarbonAds from 'starlight-carbon-ads'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/trueberryless-org/starlight-carbon-ads/edit/main/docs/',
      },
      plugins: [starlightCarbonAds()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started'],
        },
      ],
      social: [
        { href: 'https://github.com/trueberryless-org/starlight-carbon-ads', icon: 'github', label: 'GitHub' },
      ],
      title: 'starlight-carbon-ads',
    }),
  ],
})
