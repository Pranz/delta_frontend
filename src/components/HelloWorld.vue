<template>
  <div class="hello">
    <h1>Simple test component</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';

.hello {
  @include contained();
  background: $yellow-light;
  min-height: 400px;
  padding-top: 2rem;
}

h1, h2 {
  margin: 0;
  font-weight: normal;
}
</style>
