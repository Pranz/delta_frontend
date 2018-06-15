<template>
  <div id="navbar">
    <div class="container">
      <ul class="links">
        <li>Aktuellt</li>
        <li>Historik</li>
        <li>Mina diskussioner</li>
        <li>Logga ut</li>
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
  }
}

</style>
