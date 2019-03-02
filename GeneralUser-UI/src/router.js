import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Profile from './components/profile.vue'
import Redemption from './components/redemption.vue'
import Points from './components/points.vue'
import Login from './components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/redemption',
      name: 'redemption',
      component: Redemption
    },
    {
      path: '/points',
      name: 'points',
      component: Points
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
