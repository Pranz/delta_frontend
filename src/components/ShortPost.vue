<template>
  <div id="container" align="center">
  <div id="shortpost">
    <router-link to="{ name: post, params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <small>{{ post.date }}</small>
    <p>{{ post.body }}</p>
  </div>
</div>
</template>
<script>
import { takeWhile } from 'lodash'

export default {
  name: 'ShortPost',
  props: ['post'],
  methods: {
    summary (text) {
      const result = takeWhile(text, char => '\n')
      if (result.length < 80) {
        return result
      } else {
        return result.substring(0, 77) + '...'
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';

#shortpost {
  text-align: left;
  display: inline-block;
}

#shortpost:hover {
  background-color: bisque;
}

h2:hover {
  color: cornflowerblue;
}

a {
  color: inherit;
  text-decoration: inherit;
}
</style>
