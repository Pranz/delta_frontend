<template>
  <div id="detailed">
    <h1>{{title}}</h1>
    <h6>{{date}} {{author}}</h6>
    <p>{{body}}</p>
    <DeltaButton postID="id" userID="user()"></DeltaButton>
    <div id="new-comment">
      <textarea v-model="newcomment"></textarea>
      <button type="submit" v-on:click="postComment()">Kommentera</button><br>
    </div>
    <div id="comments" v-for="comment in comments" :key="comment.id">
      <h6>{{comment.userID}}</h6>
      <p>{{comment.content}}</p>
      <DeltaButton postID="comment.id" userID="comment.userID"></DeltaButton>
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
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    postComment: function () {
      if (this.newcomment.length !== 0) {
        this.comments.push({userID: this.user, id: '345345', content: this.newcomment})
        this.newcomment = ''
        alert(this.newcomment)
      } else {
        alert('oops')
      }
    }
  },
  data: function () {
    return {
      newcomment: '',
      comments: [
        {
          userID: '123456',
          id: '44444',
          content: 'HejHej kommentar1 blabla'
        },
        {
          userID: '3456',
          id: '5555',
          content: 'HejHej kommentar2 blabla'
        }
      ]
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

#comments {
  border-radius: 5px;
  border-style: solid;
  border-color: $warm-grey;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
