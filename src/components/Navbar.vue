<template>
    <div id="navbar">
      <div class="container" >
        <img src="@/assets/logoSVG.svg" alt="logo" id="logo"/>
        <ul class="links">
          <li><router-link to="/">Aktuellt</router-link></li>
          <li><router-link to="/makepost">Skapa inlägg</router-link></li>
          <li><router-link to="/minadiskussioner">Mina diskussioner</router-link></li>
          <li><router-link to='/login'>Logga in</router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
@import '../styles/color.scss';

#navbar {
  height: 300px;
  background: $yellow;
  .container {
    display: flex;
    height: inherit;
  }
  .links {
    margin-left: auto;
    margin-right: 3rem;
    margin-top: auto;
    margin-bottom: 0;
    padding-left: 0;
    display: flex;
    list-style: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: $yellow-light;
    border: 2px solid darken($yellow, 15);
    border-bottom: none;
    li {
      padding: 1rem;
      font-weight: 400;
    }
    li a {
      text-decoration: none;
      color: #2C3E50;
    }
    li a:hover {
      font-weight: bold;
    }
  }
  router-link {
    text-decoration: none;
    color: #555555;
  }
}
#logo {
  width: 20%;
  height: width;
}
#body {
   padding:10px;
   padding-bottom:60px;   /* Height of the footer */
}
</style>
