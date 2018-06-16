<template>
  <div id="container" align="center">
  <div id="login">
    <h1>Logga in</h1>
    <form>
      <label for="email">Email</label><br>
      <input type="email" id="email" placeholder="exempel@delta.se" onfocus="this.placeholder = ''" onblur="this.placeholder = 'exempel@delta.se'" required><br><br>
      <label for="psw">Lösenord</label><br>
      <input type="password" placeholder="Lösenord" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Lösenord'" id="psw" required><br><br>
      <button type="submit" v-on:click="signin()">Logga in</button><br><br>
      Inte medlem?
      <router-link to='/signup'>Skapa konto här</router-link>
    </form>
  </div>
</div>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  name: 'Login',
  methods: {
    signin: function () {
      var email = document.getElementById('email')
      var password = document.getElementById('psw')
      alert('Hello')
      console.write('email: ' + email)
      console.write('psw: ' + password)
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
}
</style>
