<template>
  <div class="post">
    <h1>{{title}}</h1>
    <p>
      {{body}}
    </p>
  </div>
</template>

<script>
import { getPost } from '../common/api'

export default {
  name: 'Post',
  props: ['id'],
  data () {
    return {
      loading: true,
      body: '',
      title: ''
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const response = await getPost(this.id)
      console.log('bruh')
      this.loading = false
      this.body = response.body
      this.title = response.title
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/positioning.scss';

.post {
  @include contained();
}

</style>
