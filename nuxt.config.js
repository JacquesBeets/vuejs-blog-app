const pkg = require('./package')
const bodyParser = require('body-parser')
const axios = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'The Blog App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An awsome Web Dev Blog!' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: './assets/images/favicon.png' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Open+Sans'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios:{
    credentials: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    fbAPIKey: 'AIzaSyASSzJ3t3PzRsHDFuCnesGZy-f_456QZYo'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  // router: {
  //   middleware: 'log'
  // }
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  // generate: {
  //   routes: function() {
  //     return axios.get('https://blogapp-4939f.firebaseio.com/posts.json')
  //     .then(res => {
  //       const routes = []
  //       for (const key in res.data) {
  //         routes.push({
  //           route: '/posts/' + key, 
  //           payload: {postData: res.data[key]}
  //         })
  //       }
  //       return routes
  //     })
  //   }
  // } 
}
