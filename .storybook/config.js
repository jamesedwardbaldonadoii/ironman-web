import { configure } from '@storybook/vue'
import Vue from 'vue'

// import vue plugins
import Vuex from 'vuex'

//import scss
import '@/scss/style.scss'
import '@/assets/css/tailwind.css'

// import custom components
import Button from '@/components/Button.vue'

// install vue plugins
Vue.use(Vuex);

// register custom components
Vue.component('my-button', Button);

configure(require.context('@/components/stories', true, /\.stories\.js$/), module);