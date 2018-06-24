<template>
  <span>
    <span id="likeButton" v-on:click="Like()"><img src="@/assets/deltaSVG.svg" alt="delta" id="delta" width="20px"/></span>
    <span id="likes">0</span>
  </span>
</template>
<script>
export default {
  name: 'DeltaButton',
  methods: {
    Like: function () {
      document.getElementById('likes').innerHTML = parseInt(document.getElementById('likes').innerHTML) + 1
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
}
#delta:hover {
  background: $dark-grey;
}

#likes {
  padding-left: 4px;
  display: table-cell;
  vertical-align: middle;
}
</style>
