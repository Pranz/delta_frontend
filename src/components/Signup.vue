<template>
  <div id="container" align="center">
  <div id="signup">
    <h1>Skapa konto</h1>
    <label for="email">Email</label><br>
    <input type="email" id="email" placeholder="exempel@delta.se"><br><br>
    <label for="username">Användarnamn</label><br>
    <input type="text" id="username" placeholder="Användarnamn"><br><br>
    <label for="psw">Lösenord</label><br>
    <input type="password" placeholder="Skriv ditt lösenord" id="psw" required><br><br>
    <input type="password" placeholder="Upprepa lösenord" id="confirm_psw" required><br><br>
    <button type="submit" onclick="validatePassword">Skapa konto</button><br>
  </div>
</div>
</template>
<script>
export default {
  name: 'Signup'
}

var email = document.getElementById("email"),
password = document.getElementById("psw"),
confirm_password = document.getElementById("confirm_psw")

function validatePassword() {

  if(password.value != confirm_password.value) {
    alert("Lösenordet stämmer inte överrens");
  } else {
    alert("OK!");
  }
}


</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';

#signup {
  text-align: center;
}

</style>
