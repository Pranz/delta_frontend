<template>
  <div class="aktuellt">
    <h1>{{ hello }}</h1>
    <div class="row" v-for="item in items" :key="item.id">
        <ShortPost
          v-bind:title=item.title
          v-bind:body=item.body
          v-binddate=item.date>
        </ShortPost>
    </div>
  </div>
</template>

<script>
import ShortPost from './ShortPost.vue'

export default {
  name: 'Aktuellt',
  components: {
    ShortPost
  },
  data () {
    return {
      hello: 'hi!',
      items: [{
        id: 0,
        title: 'Motionera mera!',
        body: 'Motion är bra för hälsan.',
        date: 'xxx' }
      ]
    }
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

</style>
