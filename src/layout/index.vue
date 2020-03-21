<template>
  <div id="app" class="flex flex-col h-screen overflow-hidden">
    <AppHeader v-if="$currentUser.id" class="flex-none"></AppHeader>
    <div class="bg-white flex-1 overflow-hidden bg-white relative">
      <AppSidebarLeft />
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <AppSidebarRight />
    </div>
    <AppFooter class="flex-none"></AppFooter>
  </div>
</template>

<script>
import AppHeader from './Header'
import AppFooter from './Footer'
import AppSidebarRight from './SidebarRight'
import AppSidebarLeft from './SidebarLeft'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter,
    AppSidebarLeft,
    AppSidebarRight
  },

  data: () => {
    return {
      isLogin: false
    }
  }
}
</script>
