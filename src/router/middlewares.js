import $store from '../store'
import { AuthService } from '../services/auth.service'

/**
 * Current user state initialization
 * @WARN Must be always first in middleware chain
 */
export function initCurrentUserStateMiddleware (to, from, next) {
  const currentUserId = $store.state.user.currentUser.id

  if (AuthService.getRefreshToken() && !currentUserId) {
    return AuthService.refreshTokens()
      .then(() => $store.dispatch('user/getCurrent'))
      .then(() => next())
      .catch(error => console.log(error))
  }
  next()
}

/**
 * Check access permission to auth routes
 */
export function checkAccessMiddleware (to, from, next) {
  const currentUserId = $store.state.user.currentUser.id
  const isAuthRoute = to.matched.some(item => item.meta.isAuth)

  const EXCLUDE_PATH_IF_LOGIN = ['login', 'signup', 'forgot-password']

  if (isAuthRoute && currentUserId) return next()
  if (currentUserId && (EXCLUDE_PATH_IF_LOGIN.indexOf(to.name) > -1)) return next({ name: 'dashboard' })
  if (isAuthRoute) return next({ name: 'login' })
  next()
}

export function setPageTitleMiddleware (to, from, next) {
  const pageTitle = to.matched.find(item => item.meta.title)

  if (pageTitle) window.document.title = pageTitle.meta.title
  next()
}
