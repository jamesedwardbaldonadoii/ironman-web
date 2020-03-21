<template>
  <div class="app-header pl-2">

    <Logo class="mt-2"/>

    <div class="flex-1"></div>

    <div class="search-wrapper flex relative" :class="{'active': activeSearch}">
      <AppInput ref="searchRef" height="45px" class="search-bar" v-model="searchText" @blur="searchBlur">
        <AppButton slot="after" icon="search" borderless :onClick="toggleActiveSearch"/>
      </AppInput>
    </div>

    <div class="relative ml-1">
      <AppButton icon="bell" borderless :onClick="toggleRightSidebar"/>
      <div class="absolute notification-count">99</div>
    </div>

    <DropdownMenu class="flex-none relative">
      <div slot="icon">
        <AppButton icon="cogs" borderless/>
      </div>
      <ul>
        <li> <a href="logout"> Logout </a> </li>
      </ul>
    </DropdownMenu>
  </div>
</template>

<script>
import { AuthService } from '@/services/auth.service'
import { SidebarService } from '@/services/sidebar.service'
import DropdownMenu from '@/components/DropdownMenu'
// import AppIcon from '@/components/Icons'
import AppButton from '@/components/Button'
import AppInput from '@/components/Input'
import Logo from '@/components/Logo'

export default {
  name: 'Header',
  components: {
    DropdownMenu,
    // AppIcon,
    AppButton,
    AppInput,
    Logo
  },
  data: () => (
    {
      activeSearch: false,
      searchText: ''
    }
  ),
  methods: {
    toggleRightSidebar () {
      SidebarService.toggleRightSidebar('notification')
    },
    toggleActiveSearch () {
      this.activeSearch = !this.activeSearch
      if (this.activeSearch) { this.$refs.searchRef.$refs.input.focus() }
    },
    searchBlur () {
      this.activeSearch = !!this.searchText
    },
    logout () {
      AuthService.makeLogout()
    }
  }
}
</script>
