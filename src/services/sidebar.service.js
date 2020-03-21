import $store from '@/store'

export class SidebarService {
  /**
   * @showRight sidebar
   */
  static toggleRightSidebar (view) {
    $store.commit('sidebar/TOGGLE_RIGHT_SIDEBAR', { view })
  }

  /**
   * @showLeft sidebar
   */
  static toggleLeftSidebar () {
    $store.commit('sidebar/TOGGLE_LEFT_SIDEBAR', {})
  }
}
