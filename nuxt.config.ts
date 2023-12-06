export default defineNuxtConfig({
  // runtimeConfig: {
  //   apiSecret: '123',
  //   public: {
  //     apiBase: process.env.PUBLIC_API_BASE
  //   }
  // },

  nitro: {
    preset: 'vercel-edge'
  },

  routeRules: {
    '/examples/*': { redirect: '/redirect-route' },
    '/modify-headers-route': { headers: { 'x-magic-of': 'nuxt and vercel' } },
    // Enables client-side rendering
    '/spa': { ssr: false },
  },


  modules: ["@nuxtjs/tailwindcss"]
})