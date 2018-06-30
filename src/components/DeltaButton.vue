<template>
  <div class="delta">
    <div class="delta-like" v-on:click="Like()"><img src="@/assets/deltaSVG.svg" alt="delta"/></div>
    <div class="delta-like-value">{{likes}}</div>
    <div class="delta-comment"><img src="@/assets/commentSVG.svg" alt="comments"/></div>
    <div class="delta-comment-value">{{comments}}</div>
    <div class="tags" v-bind:key="tag" v-for="tag in tags">
      <span id="tag">{{tag}}</span>
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
      tags: ['arbetspendling', 'miljöfrågor', 'trafikverket', 'arbetspendling']
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
  display: block;

}

#tag {
  margin-right: 5px;
  background-color: $warm-grey;
  border-radius: 4px;
  padding: 4px;
  word-wrap: break-word;
}
</style>
