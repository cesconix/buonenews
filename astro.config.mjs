// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel({
    isr: { expiration: 30 },
  }),
  image: {
    domains: ["www.datocms-assets.com"],
  },
  redirects: {
    "/": "/home",
  },
});
