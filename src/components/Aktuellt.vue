<template>
  <div class="aktuellt">
    <div class="row" v-for="item in items" :key="item.id">
        <ShortPost
          v-bind:post=item>
        </ShortPost>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ShortPost from './ShortPost.vue'

export default {
  name: 'Aktuellt',
  components: {
    ShortPost
  },
  data () {
    return {
      posts: [],
      items: [{
        id: 0,
        title: 'Motionera mera!',
        body: 'Motion är bra för hälsan.',
        date: 'xxx' }
      ]
    }
  },
  mounted () {
    axios
      .get('https://localhost:5000/posts')
      .then(resp => resp.array.forEach(post => {
        this.posts.push(post)
      }))
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
