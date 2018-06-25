<template>
  <div class="aktuellt">
    <h1>Nya motioner och förslag</h1>
    <div class="row">
      <div class="col1">
        <ShortPost title="med anledning av prop. 2017/18:266 En ny regional planering" body="Riksdagen ställer sig bakom det som anförs i motionen om en kontinuerlig dialog för att göra det möjligt att inkludera fler län i lagstiftningen om regional fysisk planering och tillkännager detta för regeringen.
    Riksdagen ställer sig bakom det som anförs i motionen om cyklism och tillkännager detta för regeringen."></ShortPost>
    <ShortPost title="med anledning av prop. 2017/18:266 En ny regional planering" body="Riksdagen ställer sig bakom det som anförs i motionen om en kontinuerlig dialog för att göra det möjligt att inkludera fler län i lagstiftningen om regional fysisk planering och tillkännager detta för regeringen.
Riksdagen ställer sig bakom det som anförs i motionen om cyklism och tillkännager detta för regeringen."></ShortPost>
      </div>
      <div class="col2">
        <div class="box"></div>
      </div>
    </div>

  </div>

</template>

<script>
import ShortPost from './ShortPost.vue'

export default {
  name: 'Aktuellt',
  components: {
    ShortPost
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';

.aktuellt {
  padding-top: 2rem;
  @include contained();
  background: white;
  min-height: 50vh;
  h1 {
    margin: 0;
  }
  p {
    font-weight: 400;
  }
}

.row {
  @include row(8,5);
}

.box {
  height: 400px;
  background: $warm-grey;
}

</style>
