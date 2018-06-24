<template>
  <h1></h1>
  <p></p>
  <DeltaButton deltas="deltas"></DeltaButton>
</template>
<script>
  export default {
    name: DetailedView,
    props: ['title', 'id', 'body', 'author', 'deltas', 'comments']
  }
</script>
<style scoped lang="scss"></style>
