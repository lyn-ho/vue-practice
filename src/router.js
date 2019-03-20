import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/1.1',
      name: 'Vue core conception (attr, event, slot)',
      component: () => import('./views/1.1')
    }
  ],


})
