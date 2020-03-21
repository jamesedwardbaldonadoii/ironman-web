<template>
  <div class="absolute left-0 top-0 h-full w-56 bg-white" v-show="$leftSidebar">
    Test
  </div>
</template>

<script>
export default {
  name: 'SideBarLeft',
  methods: {
  },
  mounted: () => {
    console.log(this, 'asd')
  }
}
</script>
