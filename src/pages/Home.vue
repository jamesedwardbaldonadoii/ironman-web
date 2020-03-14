<template>
  <div class="home page"></div>
</template>

<script>
export default {
  name: 'IndexPage',

  data () {
    return {
      msg: 'Welcome to Index!!!',

      pagination: {
        limit: 20,
        offset: 0,
        total: 60
      }
    }
  },

  methods: {}
}
</script>
