<template>
  <div class="app-sidebar right " :class="{active: $rightSidebar}">
    RightaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaS
  </div>
</template>

<script>
export default {
  name: 'SideBarLeft',
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .app-sidebar {
    @apply absolute top-0 bottom-0 w-56 border-l border-solid border-gray-300 bg-gray-300 transition transition-all duration-300 ease-in-out shadow;

    &.right {
      @apply opacity-0 border-l;
      right: -100vw;

      &.active {
        @apply right-0 opacity-100;
      }
    }

    &.left {
      @apply opacity-0 border-r;
      left: -100vw;

      &.active {
        @apply left-0 opacity-100;
      }
    }
  }
</style>
