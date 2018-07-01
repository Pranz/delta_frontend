<template>
  <div class="container">
    <div class="delta">
      <div class="delta-misc">
        <div class="delta-like">
          <div class="delta-like-icon" v-on:click="Like()"><img src="@/assets/deltaSVG.svg" height="15px" width="15px" alt="delta"/></div>
          <div class="delta-like-value">{{likes}}</div>
        </div>
        <div class="delta-comment">
          <div class="delta-comment-icon" v-on:click="toggleComm()"><img src="@/assets/commentSVG.svg" height="15px" width="15px" alt="comments"/></div>
          <div class="delta-comment-value">{{NumbComments}}</div>
        </div>
      </div>
      <div class="delta-tags">
        <div class="delta-tag" v-bind:key="tag" v-for="tag in tags">
          <div class="delta-tag-value">{{tag}}</div>
        </div>
      </div>
    </div>
    <div class="new-comment" v-if="toggleComment">
      <textarea v-model="newcomment" placeholder="Skriv din kommentar..." autofocus v-on:keyup.enter="postComment()"></textarea>
      <button type="submit" v-on:click="postComment()">Kommentera</button><br>
      <div id="comments" v-for="comment in comments" :key="comment.id">
        <h6>{{comment.userID}}</h6>
        <p>{{comment.content}}</p>
        <DeltaButton postID="comment.id" userID="comment.userID"></DeltaButton>
        <div id="comments" v-for="comment in comment.comments" :key="comment.id">
          <h6>{{comment.userID}}</h6>
          <p>{{comment.content}}</p>
          <DeltaButton postID="comment.id" userID="comment.userID"></DeltaButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DeltaButton',
  data () {
    return {
      likes: parseInt(16),
      NumbComments: parseInt(125),
      newcomment: '',
      toggleComment: false,
      comments: [
        {
          userID: '123456',
          id: '44444',
          content: 'HejHej kommentar1 blabla',
          comments: [
            {
              userID: '356',
              parentID: '0000',
              id: '555',
              content: 'Kommentar på en kommentar'
            }
          ]
        },
        {
          userID: '3456',
          id: '5555',
          content: 'HejHej kommentar2 blabla'
        }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  props: ['postID', 'userID', 'tags'],
  methods: {
    toggleComm: function () {
      if (this.toggleComment === false) {
        this.toggleComment = true
      } else {
        this.toggleComment = false
      }
    },
    Like: function () {
      this.likes++
      //  update database using id prop
    },
    postComment: function () {
      if (this.newcomment.length !== 0) {
        this.comments.unshift({userID: this.user, id: '345345', content: this.newcomment})
        this.newcomment = ''
      } else {

      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';
@import '@/styles/input.scss';

.container {
  width: 100%;
}
.delta {
  display: flex;
  flex-direction: column;
}

.new-comment {
  display: flex;
  flex-direction: column;
}

.delta-misc {
  display: flex;
  flex-direction: row;
  padding: 5px;
}

.delta-like-icon {
  width: 20px;
  height: 20px;
  padding: 3px;
}

.delta-like-icon:hover {
  cursor: pointer;
  opacity: 0.7;
}

.delta-like-value {
  width: 20px;
  height: 20px;
  padding: 3px;
}

.delta-like {
  width: 100px;
  display: flex;
  flex-direction: row;
}

.delta-comment {
  width: 100px;
  display:flex;
  flex-direction: row;
}

.delta-comment-icon {
  width: 20px;
  height: 20px;
  padding: 3px;
}

.delta-comment-icon:hover {
  cursor: pointer;
  opacity: 0.7;
}

.delta-comment-value {
  width: 20px;
  height: 20px;
  padding: 3px;
}

.delta-tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.delta-tag {
  width: auto;
  padding: 3px;
  margin: 5px;

  background-color: $warm-grey;
  opacity: 0.7;
  border-radius: 5px;
}

.delta-tag:hover {
  cursor: pointer;
  opacity: 0.5;
}

#comments {
  border-radius: 5px;
  border-style: solid;
  border-color: $warm-grey;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}

#2ndlvlComment {
  margin-left: 10px;
}
</style>
