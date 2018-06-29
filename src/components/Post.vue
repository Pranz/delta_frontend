<template>
  <div id="container" align="center">
  <div id="post">
    hello wrold
  </div>
</div>
</template>
<script>
export default {
  name: 'Post'
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
