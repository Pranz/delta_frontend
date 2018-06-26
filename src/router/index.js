import Vue from 'vue'
import Router from 'vue-router'
import Aktuellt from '@/components/Aktuellt.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import Historik from '@/components/Historik.vue'
import MinaDiskussioner from '@/components/MinaDiskussioner.vue'
import ShortPost from '@/components/ShortPost.vue'
import Post from '@/components/Post.vue'
import About from '@/components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Aktuellt',
      component: Aktuellt
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
      path: '/historik',
      name: 'Historik',
      component: Historik
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
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
