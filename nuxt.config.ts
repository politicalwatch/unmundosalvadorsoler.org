import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      disclaimer: process.env.NUXT_PUBLIC_DISCLAIMER,
    },
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in", // default
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  content: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },

  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "es",
        name: "Español",
        isCatchallLocale: true,
      },
    ],
    defaultLocale: "es",
    detectBrowserLanguage: false,
    baseUrl: import.meta.env.NUXT_PUBLIC_BASE_URL,
  },

  site: {
    url: "https://unmundosalvadorsoler.org",
    name: "Fundación Salvador Soler",
  },

  compatibilityDate: "2024-10-17",
});
