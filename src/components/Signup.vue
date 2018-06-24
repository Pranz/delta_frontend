<template>
  <div id="container" align="center">
  <div id="signup">
    <h1>Skapa konto</h1>
    <form>
      <label for="email">Email</label><br>
      <input type="email" id="email" placeholder="exempel@delta.se" onfocus="this.placeholder = ''" onblur="this.placeholder = 'exempel@delta.se'"><br><br>
      <label for="username">Användarnamn</label><br>
      <input type="text" id="username" placeholder="Användarnamn" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Användarnamn'"><br><br>
      <label for="psw">Lösenord</label><br>
      <input type="password" placeholder="Lösenord" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Lösenord'" id="psw" required><br><br>
      <input type="password" placeholder="Upprepa lösenord" id="confirm_psw" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Upprepa lösenord'" required><br><br>
      <button type="submit" v-on:click="validatePassword()">Skapa konto</button><br>
    </form>
  </div>
</div>
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
  name: 'Signup',
  methods: {
    validatePassword: function () {
      var password = document.getElementById('psw')
      var confirmPassword = document.getElementById('confirm_psw')
      if (password.value !== confirmPassword.value) {
        alert('Passwords dont match')
      } else {
        var email = document.getElementById('email')
        alert('hej')
        this.createUser(email, password)
      }
    },
    createUser: function (email, password) {
      alert('create user')
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
