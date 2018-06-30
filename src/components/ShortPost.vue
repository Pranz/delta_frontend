<template>
  <div class="container" align="center">
    <div class="shortpost">
      <h2>{{title}}</h2>
      <p>{{body}}</p>
      <button class="readmore" v-on:click="ReadMore()">Läs mer...</button>
      <DeltaButton postId="postId" userId="userId"></DeltaButton>
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

.shortpost {
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: transparentize(white, 0.4);
  border-style: solid;
  border-color: $warm-grey;
  padding: 10px;
}

.readmore {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
