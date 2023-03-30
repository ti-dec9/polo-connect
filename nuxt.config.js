export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'polo-connect',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css",
        rel: "stylesheet",
      },
      {
        href:"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
        rel:"stylesheet"
      },
      {
        href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        rel:"stylesheet"
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    '~/assets/css/hover-min.css',
  ],

  src: [
    "https://code.jquery.com/jquery-3.6.4.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
