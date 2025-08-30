import { AstroError } from "astro/errors";
import { z } from "astro/zod";

const configSchema = z.object({
  code: z.string(),
  placement: z.string(),
  optionalAds: z.boolean().optional().default(true),
});

export function validateConfig(userConfig: unknown): StarlightCarbonAdsConfig {
  const config = configSchema.safeParse(userConfig);

  if (!config.success) {
    const errors = config.error.flatten();

    throw new AstroError(
      `Invalid starlight-carbon-ads configuration:
      
      ${errors.formErrors.map((formError) => ` - ${formError}`).join("\n")}
      ${Object.entries(errors.fieldErrors)
        .map(
          ([fieldName, fieldErrors]) =>
            ` - ${fieldName}: ${fieldErrors.join(" - ")}`
        )
        .join("\n")}
        `,
      `See the error report above for more informations.\n\nIf you believe this is a bug, please file an issue at https://github.com/trueberryless-org/starlight-carbon-ads/issues/new`
    );
  }

  return config.data;
}

export type StarlightCarbonAdsUserConfig = z.input<typeof configSchema>;
export type StarlightCarbonAdsConfig = z.output<typeof configSchema>;
