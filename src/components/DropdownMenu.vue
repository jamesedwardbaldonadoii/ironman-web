<template>
  <UiOnClickOutside :do="hideContent">
    <div class="relative">
      <div class="p-1 text-gray-500" @click="toggleMenu">
        <slot name="icon">
          <div class="default-menu-icon">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </slot>
      </div>

      <div class="dropdown-menu" :class="{active: isShown}" @click="hideContent">
        <slot></slot>
      </div>
    </div>
  </UiOnClickOutside>
</template>

<script>
import UiOnClickOutside from './OnClickOutside'

export default {
  name: 'UiBaseMenuDropdown',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    listType: {
      type: Boolean,
      default: true
    }
  },

  components: {
    UiOnClickOutside
  },

  data () {
    return {
      isShown: false
    }
  },
  methods: {
    toggleMenu () {
      this.isShown = !this.isShown
    },
    hideContent () {
      if (this.isShown) this.isShown = false
    }
  },

  mounted () {
    if (!this.$slots.default) {
      throw new Error('Please define default slot content!')
    }
    if (this.listType && (this.$slots.default[0].tag !== 'ul')) {
      throw new Error(`Wrong template! Please use <ul> tag as default slot to define menu list:
      <UiMenu>
        <ul>
          <li>hello</li>
          <li>bye</li>
        </ul>
      <UiMenu>
      `)
    }
  }
}
</script>
