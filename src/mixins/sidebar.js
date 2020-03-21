export default {
  computed: {
    $leftSidebar () {
      return this.$store.state.sidebar.showLeft
    },
    $rightSidebar () {
      return this.$store.state.sidebar.showRight
    }
  }
}
