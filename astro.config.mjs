import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [icon({
    iconDir: "src/icon"
  }), vue()]
});