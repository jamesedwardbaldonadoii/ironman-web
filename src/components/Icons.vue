<template>
  <span v-on="$listeners">
    <component
      :is="name"
      :width="width"
      :height="height"
      :color="color">
    </component>
  </span>
</template>

<script>
import write from './icons/write'
import moon from './icons/moon'
import done from './icons/done'
import arrowDown from './icons/arrowDown'
import sort from './icons/sort'
import sortDown from './icons/sortDown'
import sortUp from './icons/sortUp'

export default {
  name: 'icons',
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
      default: 'text-white'
    }
  },

  components: {
    write,
    moon,
    done,
    arrowDown,
    sort,
    sortDown,
    sortUp
  }
}
</script>
