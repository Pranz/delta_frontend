<template>
  <div class="aktuellt">
    <h1>Nya motioner och förslag</h1><br>
    <div class="row">
      <div class="col1" v-for="post in posts" :key="post.id">
        <ShortPost
          :title="post.title"
          :id="post.id"
          :body="post.body"
          :postId="post.id">
        </ShortPost>
      </div>
      <div class="col2">
        <div class="box" id="box" v-if="false"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ShortPost from './ShortPost.vue'
import DetailedView from './DetailedView.vue'
import { sortBy } from 'lodash';

// get short versions of posts from database with (id, title, body, tags)
export default {
  name: 'Aktuellt',
  components: {
    ShortPost,
    DetailedView
  },
  methods: {
    readMore: function (id) {
      alert(id)
    }
  },
  mounted () {
    axios
      .get('http://6613c44c.ngrok.io/posts')
      .then(resp => resp.data.forEach(post => {
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
