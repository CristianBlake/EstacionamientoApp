// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
  modules: ['nuxt-icon', '@formkit/nuxt'],
  css: ['~/assets/css/main.css', '@formkit/themes/genesis', 'vue-toastification/dist/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  runtimeConfig: {
    public: {
      api: 'http://localhost:8000/api'
    }
  }
})
