<template>
    <div id="navbar">
      <div class="container" >
        <div class="left-bar">
          <img src="@/assets/logoSVG.svg" alt="logo" id="logo"/>
          <p v-if="user" style="margin-top: 1rem">
            Inloggad som {{user}}
          </p>
        </div>
        <ul class="links">
          <li><router-link to="/">Aktuellt</router-link></li>
          <li><router-link to="/makepost">Skapa inlägg</router-link></li>
          <li><router-link to="/minadiskussioner">Mina diskussioner</router-link></li>
          <li v-if="user">
            <span class="prog-link" v-on:click="logout">
              Logga ut
            </span>
          </li>
          <li v-else><router-link to='/login'>Logga in</router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.commit('logout')
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/color.scss';

#navbar {
  height: 200px;
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
  }
  .left-bar {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 20%;
    margin-bottom: 1rem;
  }
  a, .prog-link {
    text-decoration: none !important;
    color: #555555;
    &:hover {
      cursor: pointer;
      color: #333;
      text-shadow: 2px 2px 3px rgba(0,0,0,0.07);
    }
  }
}
#logo {
  width: 100%;
  height: auto;
}
#body {
   padding:10px;
   padding-bottom:60px;   /* Height of the footer */
}
</style>
