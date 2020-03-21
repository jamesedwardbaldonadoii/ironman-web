// profile
import profilePage from '../pages/profile/ProfilePage.vue'
import profilePostsPage from '../pages/profile/ProfilePostsPage.vue'

// single pages
import homePage from '../pages/Home.vue'
import dashboardPage from '../pages/dashboard/dashboardPage.vue'
import loginPage from '../pages/Login.vue'
import signupPage from '../pages/Signup.vue'
import notFoundPage from '../pages/NotFound.vue'

import { routePropResolver } from './util'
import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | home` }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboardPage,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Home` },
    props: routePropResolver
  },
  {
    path: '/profile',
    name: 'profile',
    component: profilePage,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | profile` },
    children: [
      {
        path: '/:pageid',
        name: 'user-profile',
        component: profilePostsPage
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage,
    meta: { title: `${DOMAIN_TITLE} | login` }
  },
  {
    path: '/signup',
    name: 'signup',
    component: signupPage,
    meta: { title: `${DOMAIN_TITLE} | Signup` }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
]
