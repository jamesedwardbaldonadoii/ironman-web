<template>
  <div class="footer">
    <div>Best portal © 2017 - {{ currentYear }}</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
