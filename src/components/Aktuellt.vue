<template>
  <div class="aktuellt">
    <h1>Nya motioner och förslag</h1><br>
    <div class="row">
      <div class="col1" v-for="post in posts" :key="post.id">
        <ShortPost
          :title="post.title"
          :postID="post.id"
          :body="post.body"
          :userID="post.userID">
        </ShortPost>
      </div>
      <div class="col2">
        <div class="box" id="box" v-if="false"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ShortPost from './ShortPost.vue'
import { getLatest } from '../common/api'

// get short versions of posts from database with (id, title, body, tags)
export default {
  name: 'Aktuellt',
  components: {
    ShortPost
  },
  data () {
    return {
      loading: true,
      posts: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        const response = await getLatest()
        this.loading = false
        response.data.feed.forEach(arr => {
          const post = arr[3]
          this.posts.push(post)
        })
      } catch (e) {
        console.error(e)
      }
    },
    readMore: function (id) {
      alert(id)
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
