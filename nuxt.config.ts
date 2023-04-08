// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap"
        }
      ],
    }
  },
  css: ["@/assets/styles/main.scss"],
  devServer: {
    port: 8000,
  },
});
