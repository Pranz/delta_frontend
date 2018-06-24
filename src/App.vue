<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    navbar: Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:100,300,400,600,700');
@import '@/styles/color.scss';
@import '@/styles/layout.scss';
@import '@/styles/typography.scss';

</style>
