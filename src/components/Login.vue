<template>
  <div id="container" align="center">
  <div id="login">
    <h1>Logga in</h1>
    <h3 class="failed-login-notice"
      v-if="failedLogin">
      Misslyckades att logga in. Var vänlig försök igen.
    </h3>
    <form>
      <label for="username">Användarnamn</label><br>
      <input v-model="username"
             type="text"
             id="username"
             placeholder="Hodor"
             required><br><br>
      <label for="psw">Lösenord</label><br>
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
        console.log(response)
        this.$cookie.set('token', response.data.token, 3)
        this.$cookie.set('user', this.username, 3)
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
