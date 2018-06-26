<template>
  <div id="parent">
    <div id="box" v-if="visible">
      <div id="closeBtn" v-on:click="visible=false">X</div>
      <p>{{message}}</p>
    </div>
  </div>
  </template>
<script>
export default {
  name: 'MakePost',
  props: ['message', 'visible'],
  methods: {
    close: function () {
      this.visible = false
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';
@import '@/styles/input.scss';
@import '@/styles/typography.scss';

#box {
  float: right;
  width: 50%;
  background-color: $light-blue;
  border-radius: 10px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 300px;
  padding-left: 20px;
  padding-right: 20px;
}
#closeBtn {
  float: right;
  background-color: $dark-blue;
  right: 0px;
  top: 0px;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 10px;
  padding-top: 2px;
  position: inherit;
}
#closeBtn:hover {
  background-color: $darker-blue;
}
</style>
