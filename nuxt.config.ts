// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
  modules: ['nuxt-icon', '@formkit/nuxt', /*'@formkit/addons'*/ ],
  css: ['~/assets/css/main.css', '@formkit/themes/genesis'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})
