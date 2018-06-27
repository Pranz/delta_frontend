<template>
  <span>
    <span id="likeButton" v-on:click="Like()"><img src="@/assets/deltaSVG.svg" alt="delta" id="delta"/></span>
    <span id="value">{{likes}}</span>
    <span id="commentIcon"><img src="@/assets/commentSVG.svg" alt="comments" id="delta"/></span>
    <span id="value">{{comments}}</span><br><br>
    <span id="tags" v-for="tag in tags">
      <span id="tag">{{tag}}</span>
    </span>
  </span>
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
  props: ['postId', 'userID'],
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

#delta {
  background-color: $warm-grey;
  border-radius: 2px;
  padding: 2px;
  vertical-align: top;
  width: 25px;
  height: 25px;
}
#delta:hover {
  background: $dark-grey;
}

#value {
  padding-left: 4px;
  display: table-cell;
  vertical-align: middle;
}

#tags {
  display: table-cell;
  width: inherit;
  word-wrap: normal;
  margin-bottom: 5px;
}

#tag {
  margin-right: 5px;
  background-color: $warm-grey;
  border-radius: 4px;
  padding: 4px;
}
</style>
