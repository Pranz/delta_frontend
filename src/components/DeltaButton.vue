<template>
  <div class="delta">
    <div class="delta-misc">
      <div class="delta-like">
        <div class="delta-like-icon" v-on:click="Like()"><img src="@/assets/deltaSVG.svg" height="15px" width="15px" alt="delta"/></div>
        <div class="delta-like-value">{{likes}}</div>
      </div>
      <div class="delta-comment">
        <div class="delta-comment-icon"><img src="@/assets/commentSVG.svg" height="15px" width="15px" alt="comments"/></div>
        <div class="delta-comment-value">{{comments}}</div>
      </div>
    </div>
    <div class="delta-tags">
      <div class="delta-tag" v-bind:key="tag" v-for="tag in tags">
        <div class="delta-tag-value">{{tag}}</div>
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
      comments: parseInt(125),
      tags: ['arbetspendling', 'miljöfrågor', 'trafikverket']
    }
  },
  props: ['postID', 'userID'],
  methods: {
    Like: function () {
      this.likes++
      //  update database using id prop
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';
@import '@/styles/input.scss';

.delta {
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

<<<<<<< HEAD
#tags {
  display: table-cell;
  width: inherit;
  word-wrap: normal;
  margin-bottom: 5px;
  display: inline-block;
=======
.delta-tag {
  width: auto;
  padding: 3px;
  margin: 5px;

  background-color: $yellow-light;
  opacity: 0.7;
  border-radius: 5px;
>>>>>>> 2cf5023de7aa9d77f63fa56f4eb69a8d65e533f6
}

.delta-tag:hover {
  cursor: pointer;
  opacity: 0.5;
}

</style>

