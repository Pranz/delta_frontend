<template>
  <div id="comment">
    <h6>{{userId}}</h6>
    <p>{{content}}</p>
    <DeltaButton postID="commentId" userID="userId"></DeltaButton>
  </div>
</template>
<script>
import DeltaButton from '@/components/DeltaButton.vue'

export default {
  name: 'Comment',
  props: ['commentId', 'parentId', 'userId', 'content'],
  components: {
    DeltaButton
  }
}
</script>
<style scoped lang="scss">
</style>
