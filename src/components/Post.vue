<template>
  <div id="container" align="center">
  <div id="post">
    <h2>{{ title }}</h2>
    <small>{{ date }}</small>
    <p>{{ body }}</p>
  </div>
</div>
</template>
<script>
export default {
  name: 'Post',
  props: ['title', 'body', 'date']
}
</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';

#post {
  text-align: left;
  display: inline-block;
}
</style>
