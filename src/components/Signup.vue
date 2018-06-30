<template>
  <div id="container" align="center">
  <div id="signup">
    <h1>Skapa konto</h1>
    <h3 v-if="failureMsg">
      {{failureMsg}}
    </h3>
    <form>
      <label for="email">Email</label><br>
      <input v-model="email" type="email" id="email" placeholder="exempel@delta.se"><br><br>
      <label for="username">Användarnamn</label><br>
      <input v-model="user" type="text" id="username" placeholder="Användarnamn"><br><br>
      <label for="psw">Lösenord</label><br>
      <input v-model="pass" type="password" placeholder="Lösenord" id="psw" required><br><br>
      <input v-model="confirmPass" type="password" placeholder="Upprepa lösenord" id="confirm_psw" required><br><br>
      <button type="submit" v-on:click="createUser()">Skapa konto</button><br>
    </form>
  </div>
</div>
</template>

<script>

import { createUser } from '../common/api'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      username: '',
      pass: '',
      confirmPass: '',
      failureMsg: null
    }
  },
  methods: {
    validatePassword: function (pass, confirmPass) {
      if (pass !== confirmPass) {
        this.failureMsg = 'Lösenorden matchar inte'
        return false
      } else {
        return true
      }
    },
    createUser: async function () {
      if (!this.validatePassword(this.pass, this.confirmPass)) {
        return
      }
      try {
        await createUser(this.email, this.username, this.pass)
        this.$router.push('/login')
      } catch (e) {
        this.failureMsg = 'Kunde inte skapa användaren. Prova igen.'
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';
@import '@/styles/input.scss';

#signup {
  text-align: center;
  padding-bottom: 2rem;
}
#container {
  overflow:auto;
}

</style>
