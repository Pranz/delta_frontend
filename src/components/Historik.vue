<template>
  <div class="historik">
  <h1>Historik</h1>
</div>
</template>

<script>
export default {
  name: 'Historik'
}
</script>

<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';

.historik {
  padding-top: 2rem;
  padding-bottom: 2rem;
  @include contained();
  min-height: 50vh;
  h1 {
    margin: 0;
  }
  p {
    font-weight: 400;
  }
}
</style>
