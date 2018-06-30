<template>
  <div id="container">
    <h5>Kommentarer</h5>
    <div class="comments" v-for="comment in comments" :key="comment.id">
      <div id="oneComment">
        <h6></h6>
      </div>
  </div>
</template>
<script>
export default {
  name: 'MakePost',
  props: ['commentId', 'parentId', 'userId', 'postId'],
  components: {
    DeltaButton
  }
}
</script>
<style scoped lang="scss">
</style>
