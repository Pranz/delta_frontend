<template>
  <div id="detailed">
    <h1>{{title}}</h1>
    <h6>{{date}} {{author}}</h6>
    <p>{{body}}</p>
    <DeltaButton postID="id" userID="user()"></DeltaButton>
  </div>
</template>
<script>
import Comment from '@/components/Comment.vue'
import DeltaButton from '@/components/DeltaButton.vue'
export default {
  name: 'DetailedView',
  props: ['title', 'id', 'body', 'author', 'deltas', 'date', 'tags'],
  components: {
    Comment,
    DeltaButton
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  data: function () {
    return {
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/color.scss';
@import '@/styles/layout.scss';
@import '@/styles/input.scss';

#detailed {
  margin: 20px;
  padding-left: 10px;
}

</style>
