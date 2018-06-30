<template>
  <div id="detailed">
    <h1>{{title}}</h1>
    <h6>{{date}} {{author}}</h6>
    <p>{{body}}</p>
    <DeltaButton postID="id" userID="user()"></DeltaButton>
    <div id="commentSection" v-for="comment in comments" :key="comment.id">
      <h6>{{comment.userID}}</h6>
      <p>{{comment.content}}</p>
    </div>
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
  data: function () {
    return {
      comments: [
        {
          userID: '123456',
          content: 'HejHej kommentar1 blabla'
        },
        {
          userID: '3456',
          content: 'HejHej kommentar2 blabla'
        }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/color.scss';
@import '@/styles/layout.scss';

#detailed {
  margin: 20px;
  padding-left: 10px;
}

#commentSection {
  background-color: red;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 5px;
}
</style>
