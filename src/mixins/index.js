/**
 * import and init global mixins
 */

import Vue from 'vue'

import currentUser from './currentUser'
import jumpTo from './jumpTo'
import formatDateTime from './formatDateTime'
import sidebar from './sidebar'

Vue.mixin(currentUser)
Vue.mixin(jumpTo)
Vue.mixin(formatDateTime)
Vue.mixin(sidebar)
