<template>
  <div class="diskussioner">
    <h1>Mina Diskussioner</h1>
    <p v-if="diskussioner.length === 0">Här kommer diskussioner som du har deltagit i att visas</p>
    <ShortPost v-if="diskussioner.length !== 0"></ShortPost>
  </div>
</template>

<script>
import ShortPost from './ShortPost.vue'
export default {
  name: 'MinaDiskussioner',
  data () {
    return {
      diskussioner: []
    }
  },
  components: {
    ShortPost
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';

.diskussioner {
  padding-top: 2rem;
  @include contained();
  min-height: 50vh;
  h1 {
    margin: 0;
  }
  p {
    font-weight: 400;
  }
}

</style>
