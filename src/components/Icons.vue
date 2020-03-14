<template>
  <span v-on="$listeners">
    <component :is="name" :width="width" :height="height" :color="color"></component>
  </span>
</template>

<script>
import logo from './icons/logo'
import write from './icons/write'
import moon from './icons/moon'
import done from './icons/done'
import arrowDown from './icons/arrowDown'
import sort from './icons/sort'
import sortDown from './icons/sortDown'
import sortUp from './icons/sortUp'
import home from './icons/home'

export default {
  name: 'AppIcons',

  props: {
    name: {
      type: String,
      default: 'moon'
    },
    width: {
      type: String,
      default: 'w-4'
    },
    height: {
      type: String,
      default: 'h-4'
    },
    color: {
      type: String,
      default: 'text-gray-800'
    }
  },

  components: {
    logo,
    write,
    moon,
    done,
    arrowDown,
    sort,
    sortDown,
    sortUp,
    home
  }
}
</script>
