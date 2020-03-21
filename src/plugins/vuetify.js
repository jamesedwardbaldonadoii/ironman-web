// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const theme = {
  default: '#000000',
  primary: '#4CAF50',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3'
}

const opts = {
  theme: {
    themes: {
      dark: theme,
      light: theme
    }
  }
}

export default new Vuetify(opts)
