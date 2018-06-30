// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import VueCookie from 'vue-cookie'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueCookie)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: VueCookie.get('user'),
    token: VueCookie.get('token')
  },
  mutations: {
    setUser (state, {user, token}) {
      state.user = user
      state.token = token
      VueCookie.set('user', user, 3)
      VueCookie.set('token', token, 3)
    },
    logout (state) {
      state.user = null
      state.token = null
      this.$cookie.delete('token')
      this.$cookie.delete('user')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
