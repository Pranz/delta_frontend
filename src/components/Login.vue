<template>
  <div id="container" align="center">
  <div id="login">
    <h1>Logga in</h1>
    <h3 class="failed-login-notice"
      v-if="failedLogin">
      Misslyckades att logga in. Var vänlig försök igen.
    </h3>
    <form>
      <input v-model="username"
             type="text"
             id="username"
             placeholder="Användarnamn"
             required><br><br>
      <input v-model="password"
             type="password"
             placeholder="Lösenord"
             id="psw" required><br><br>
      <button type="submit" v-on:click="signinAndRedirect()">Logga in</button><br><br>
      Inte medlem?
      <router-link to='/signup'>Skapa konto här</router-link>
    </form>
  </div>
</div>
</template>

<script>
import { signIn } from '../common/api'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      failedLogin: false
    }
  },
  methods: {
    async signinAndRedirect () {
      console.log(this.username)
      console.log(this.password)
      try {
        const response = await signIn(this.username, this.password)
        this.$store.commit('setUser', {user: this.username, token: response.data.token})
        this.$router.push('/')
      } catch (e) {
        this.failedLogin = true
        console.log(e)
      }
    }
  }
}

</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';
@import '@/styles/input.scss';

#login {
  text-align: center;
  display: inline-block;
  padding-bottom: 2rem;
}

.failed-login-notice {
  color: red;
}
</style>
