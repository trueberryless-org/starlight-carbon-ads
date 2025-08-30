import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightCarbonAds from "starlight-carbon-ads";

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl:
          "https://github.com/trueberryless-org/starlight-carbon-ads/edit/main/docs/",
      },
      plugins: [
        starlightCarbonAds({
          code: "test",
          placement: "https://starlight-carbon-ads.netlify.app/",
        }),
      ],
      sidebar: [
        {
          label: "Start Here",
          items: ["getting-started", "configuration"],
        },
      ],
      social: [
        {
          href: "https://github.com/trueberryless-org/starlight-carbon-ads",
          icon: "github",
          label: "GitHub",
        },
      ],
      title: "Starlight Carbon Ads",
    }),
  ],
});
