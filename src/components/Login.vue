<template>
  <div id="container" align="center">
  <div id="login">
    <h1>Logga in</h1>
    <label for="email">Email</label><br>
    <input type="email" id="email" placeholder="exempel@delta.se" required><br><br>
    <label for="psw">Lösenord</label><br>
    <input type="password" placeholder="Skriv ditt lösenord" id="psw" required><br><br>
    <button type="submit">Logga in</button><br><br>
    Inte medlem?
    <router-link to='/signup'>Skapa konto här</router-link>
  </div>
</div>
</template>
<script>
export default {
  name: 'Login'
}
var email = document.getElementById("email")
var password = document.getElementById("psw")

</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';

#login {
  text-align: center;
  display: inline-block;
}
</style>
