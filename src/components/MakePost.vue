<template>
  <div class="post-container">
    <h1>Skapa inlägg</h1><br>
    <div class="picker-post">
        <div class="picker-title">
          <label class="title-title">Titel</label>
          <input type="text" class="title-input" placeholder="Skriv en titel..." required v-model="title"/><br><br>
        </div>
        <div class="picker-body">
          <label class="title-body">Innehåll</label>
          <textarea class="body-input" placeholder="Skriv ditt inlägg..." v-model="body" required></textarea><br><br>
        </div>

        <div class="picker-tags">
          <label for="body">Taggar</label>
          <input type="text" id="tags" placeholder="t.ex. miljö, undervisning" v-on:keyup.space="addTag()" v-model="atag"/>
          <div class="added-tags">{{addedTags}}</div>
        </div>
        <button class="submit-button" type="submit" v-on:click="makePost()">Publicera</button>
      <InfoBubble message="Här kan du skapa egna inlägg om ämnen som du tycker är viktiga.
        Se till att du taggar ditt inlägg med relevanta taggar för att andra
        användare ska enklare kunna hitta ditt inlägg." visible="true"></InfoBubble>
    </div>
  </div>
</template>

<script>
import InfoBubble from './InfoBubble.vue'
import { makePost } from '../common/api'

export default {
  name: 'MakePost',
  components: {
    InfoBubble
  },
  data: function () {
    return {
      title: '',
      body: '',
      atag: '',
      addedTags: ''
    }
  },
  methods: {
    addTag: function () {
      if (this.addedTags.length === 0) {
        this.addedTags = this.atag
      } else {
        this.addedTags = this.addedTags + ', ' + this.atag
      }
      this.atag = ''
    },
    makePost: async function () {
      if (this.title.length === 0 || this.body.length === 0) {
        alert('Var vänlig fyll i titel och innehåll')
      } else {
        const response = await makePost()
        this.$router.push({name: 'DetailedView', params: {id: response.id, title: this.title, body: this.body}})
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';
@import '@/styles/input.scss';
@import '@/styles/typography.scss';

.post-container, .picker-post, .picker-title, .picker-body, .picker-tags  {
  display: flex;
  flex-direction: column;
}

.post-container {
  padding: 20px;
}

.title-input {
  width: 300px;
  height: 40px;
  font-size: 30px;

  border-radius: 4px;
}

.body-input {
  height: 300px;
  width: 600px;
}

.submit-button {
  width: 150px;
  margin-top: 10px;
}





</style>
