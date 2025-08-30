import type { StarlightPlugin } from "@astrojs/starlight/types";

import {
  type StarlightCarbonAdsConfig,
  type StarlightCarbonAdsUserConfig,
  validateConfig,
} from "./libs/config";
import { overrideStarlightComponent } from "./libs/starlight";
import { vitePluginStarlightCarbonAdsConfig } from "./libs/vite";

export type { StarlightCarbonAdsConfig, StarlightCarbonAdsUserConfig };

export default function starlightCarbonAds(
  userConfig?: StarlightCarbonAdsUserConfig
): StarlightPlugin {
  const config = validateConfig(userConfig);

  return {
    name: "starlight-carbon-ads",
    hooks: {
      "config:setup"({
        addIntegration,
        updateConfig: updateStarlightConfig,
        config: starlightConfig,
        logger,
      }) {
        updateStarlightConfig({
          components: {
            ...starlightConfig.components,
            ...overrideStarlightComponent(
              starlightConfig.components,
              logger,
              "TableOfContents"
            ),
            ...overrideStarlightComponent(
              starlightConfig.components,
              logger,
              "Pagination"
            ),
          },
        });

        addIntegration({
          name: "starlight-carbon-ads-integration",
          hooks: {
            "astro:config:setup": ({ updateConfig }) => {
              updateConfig({
                vite: {
                  plugins: [vitePluginStarlightCarbonAdsConfig(config)],
                },
              });
            },
          },
        });
      },
    },
  };
}
