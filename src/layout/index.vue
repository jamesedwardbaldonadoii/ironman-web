<template>
  <div id="app" class="flex flex-col">
    <AppHeader class="flex-none hidden"></AppHeader>
    <div class="bg-white h-full flex-grow bg-white relative">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <AppFooter class="flex-none hidden"></AppFooter>
  </div>
</template>

<script>
import AppHeader from './Header.vue'
import AppFooter from './Footer.vue'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
