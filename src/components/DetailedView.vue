<template>
  <div id="detailed">
    <h1>{{title}}</h1>
    <h6>{{date}} {{author}}</h6>
    <p>{{body}}</p>
    <DeltaButton deltas="deltas"></DeltaButton>
  </div>
</template>
<script>
export default {
  name: 'DetailedView',
  props: ['title', 'id', 'body', 'author', 'deltas', 'comments', 'date']
}
</script>
<style scoped lang="scss">
</style>
