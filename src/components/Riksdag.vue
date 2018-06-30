<template>
  <div class="container">
    <h1>Sök igenom riksdagen</h1>
  </div>
</template>

<script>
export default {
  name: 'Riksdag'
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/positioning.scss';

.container {
  @include contained();
}

</style>
