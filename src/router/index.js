import Vue from 'vue'
import Router from 'vue-router'
import Aktuellt from '@/components/Aktuellt.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Aktuellt',
      component: Aktuellt
    }
  ]
})
