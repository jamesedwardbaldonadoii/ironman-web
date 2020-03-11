<template>
  <button class="inline-flex items-center justify-center outline-none border border-solid rounded" :class="[btnColor, btnSize]">
    <AppIcon v-if="icon" :name="icon" :color="iconProps.color" :width="iconProps.width" :height="iconProps.height" :class="{ 'mr-1': label }" /> {{label}}
  </button>
</template>

<script>
import AppIcon from './Icons.vue'

  export default {
    name: 'AppButton',
    components: {
      AppIcon,
    },
    props: {
      color: {
        type: String,
        default: 'white',
      },
      label: {
        type: String,
        default: null
      },
      icon: {
        type: String,
        default: null
      },
      size: {
        type: String,
        default: 'md'
      }
    },
    created: function () {
      if (this.icon) {  
        this.iconProps = {};

        const basicWidth = {
          sm: 'w-3',
          md: 'w-4',
          lg: 'w-5',
          xl: 'w-6'
        };
        
        const basicHeight = {
          sm: 'h-3',
          md: 'h-4',
          lg: 'h-5',
          xl: 'h-6'
        };

        if(this.color === 'white') {
          this.iconProps.color = `text-gray-700`;
        } else {
          this.iconProps.color = `text-${this.color}-200`;
        }

        this.iconProps.width = basicWidth[this.size];
        this.iconProps.height = basicHeight[this.size];
      }
    },
    computed: {
      btnColor () {
        if(this.color === 'white') {
          return `bg-${this.color} border-gray-600 text-gray-700 hover:bg-gray-400`;
        } else {
          return `bg-${this.color}-600 border-${this.color}-500 text-${this.color}-200 hover:bg-${this.color}-700`;
        }
      },

      btnSize () {
        const basic = {
          sm: 'p-2 text-sm',
          md: 'p-3 text-base',
          lg: 'p-4 text-lg',
          xl: 'p-5 text-xl'
        };

        return basic[this.size];
      }
    }
  }
</script>

<style scoped lang="scss">

</style>