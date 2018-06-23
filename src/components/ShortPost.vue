<template>
  <div id="container" align="center">
  <div id="shortpost">
    <h2>Titel</h2>
    <p>Motion till riksdagen 2017/18:4201 av Roland Utbult m.fl. KD med anledning av prop. 2017/18:261 Långsiktig finansiering och stärkt oberoende för public service Förslag till riksdagsbeslut Riksdagen antar regeringens förslag till beslut med ändringen att de sändningstillstånd som utfärdas närmast efter ikraftträdandet </p>
    <span id="readmore" v-on:click="ReadMore()">Läs mer...</span><br>
    <DeltaButton></DeltaButton>
  </div>
</div>
</template>
<script>
import DeltaButton from './DeltaButton.vue'

export default {
  name: 'ShortPost',
  components: {
    DeltaButton
  },
  methods: {
    ReadMore: function () {
      alert('connect link to detailed view')
    },
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

#shortpost {
  text-align: left;
  display: inline-block;
  border-radius: 5px;
  padding-left: 1rem;
  background-color: transparentize(white, 0.4)
}

#readmore:hover {
  text-decoration: underline;
}
</style>
