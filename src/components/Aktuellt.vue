<template>
  <div class="aktuellt">
    <h1>Nya motioner och förslag</h1>
    <div class="row">
      <div class="col1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat ab, voluptate aliquam atque ducimus? Voluptate expedita suscipit dicta fugiat, nesciunt optio aut ducimus sit deserunt aliquam ea a nostrum.
        </p>
        <ShortPost></ShortPost>
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
  background: $yellow-light;
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
  background: lighten(desaturate( red, 40), 20);
}

</style>
