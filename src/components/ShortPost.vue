<template>
  <div id="container" align="center">
    <div id="shortpost">
      <router-link :to="{ name: 'Post', params: { id: postId }}">
        <h2>{{title}}</h2>
       </router-link>
      <p>{{body}}</p>
      <router-link :to="{ name: 'Post', params: { id: postId }}">
        <button id="readmore" v-on:click="ReadMore()">Läs mer...</button>
       </router-link>
      <DeltaButton :postId="postId" :userId="userId"></DeltaButton>
    </div>
  </div>
</template>

<script>
import DeltaButton from './DeltaButton.vue'
import DetailedView from './DetailedView.vue'

export default {
  name: 'ShortPost',
  components: {
    DeltaButton,
    DetailedView
  },
  props: ['title', 'body', 'postId', 'userId'],
  created: function () {

  }
}

</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';
@import '@/styles/input.scss';

#shortpost {
  text-align: left;
  display: inline-block;
  border-radius: 5px;
  padding-left: 1rem;
  background-color: transparentize(white, 0.4);
  border-style: solid;
  border-color: $warm-grey;
  margin: 20px;
}

#readmore {
  position: relative;
  float: right;
  margin-right: 5px;
  margin-bottom: 10px;
}

h2:hover {
  color: cornflowerblue;
}

a {
  color: inherit;
  text-decoration: inherit;
}

</style>
