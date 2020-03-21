export default {
  namespaced: true,
  state: {
    showRight: false,
    showLeft: false,
    view: null
  },

  mutations: {
    /**
     * @showRight Mutation
     */
    TOGGLE_RIGHT_SIDEBAR (state, view) {
      state.showRight = !state.showRight
    },
    SHOW_RIGHT_SIDEBAR (state) {
      state.showRight = true
    },
    HIDE_RIGHT_SIDEBAR (state) {
      state.showRight = false
    },

    /**
     * @showLeft Mutation
     */
    TOGGLE_LEFT_SIDEBAR (state) {
      state.showLeft = !state.showLeft
    },
    SHOW_LEFT_SIDEBAR (state) {
      state.showLeft = true
    },
    HIDE_LEFT_SIDEBAR (state) {
      state.showLeft = false
    }
  }
}
