import type { ViteUserConfig } from "astro";

import type { StarlightCarbonAdsConfig } from "..";

export function vitePluginStarlightCarbonAdsConfig(
  config: StarlightCarbonAdsConfig
): VitePlugin {
  const moduleId = "virtual:starlight-carbon-ads-config";
  const resolvedModuleId = `\0${moduleId}`;
  const moduleContent = `export default ${JSON.stringify(config)}`;

  return {
    name: "vite-plugin-starlight-carbon-ads",
    load(id) {
      return id === resolvedModuleId ? moduleContent : undefined;
    },
    resolveId(id) {
      return id === moduleId ? resolvedModuleId : undefined;
    },
  };
}

type VitePlugin = NonNullable<ViteUserConfig["plugins"]>[number];
