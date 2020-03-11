import { configure, addParameters } from '@storybook/vue';
import Vue from 'vue';

// import vue plugins
import Vuex from 'vuex';

//import scss
import '@/scss/style.scss';
import '@/assets/css/tailwind.css';

// import custom components
import MyButton from '@/components/Button.vue';
import HelloWorld from '@/components/HelloWorld.vue'

// register custom components
Vue.component('MyButton', MyButton);
Vue.component('HelloWorld', HelloWorld);

// install vue plugins
Vue.use(Vuex);

//set default viewports
const newViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '320px',
      height: '568px'
    }
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1200px',
      height: '1024px'
    }
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1366px',
      height: '1024px'
    }
  },
  wide: {
    name: 'Wide',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
};

addParameters({
  docs: { inlineStories: true },
  viewport: {
    viewports: newViewports,
  }
});
