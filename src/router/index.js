import Vue from 'vue'
import Router from 'vue-router'
import Aktuellt from '@/components/Aktuellt.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import MakePost from '@/components/MakePost.vue'
import MinaDiskussioner from '@/components/MinaDiskussioner.vue'
import ShortPost from '@/components/ShortPost.vue'
import About from '@/components/About.vue'
import DetailedView from '@/components/DetailedView.vue'
import Riksdag from '@/components/Riksdag.vue'
import ContactForm from '@/components/ContactForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Aktuellt',
      component: Aktuellt
    },
    {
      path: '/riksdag',
      name: 'Riksdag',
      component: Riksdag
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/makepost',
      name: 'MakePost',
      component: MakePost
    },
    {
      path: '/detailedview/:id',
      name: 'DetailedView',
      component: DetailedView,
      props: true
    },
    {
      path: '/minadiskussioner',
      name: 'MinaDiskussioner',
      component: MinaDiskussioner
    },
    {
      path: '/shortpost',
      name: 'ShortPost',
      component: ShortPost
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'ContactForm',
      component: ContactForm
    }
  ]
})
