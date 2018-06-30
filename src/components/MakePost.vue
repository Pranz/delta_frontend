<template>
  <div class="makepost">
    <h1>Skapa inlägg</h1><br>
    <div class="form-con">
      <form>
        <label for="title">Titel</label><br>
        <input type="text" id="title" placeholder="Skriv en titel..." required v-model="title"/><br><br>
        <label for="body">Innehåll</label><br>
        <textarea id="body" placeholder="Skriv ditt inlägg..." v-model="body" required></textarea><br><br>
        <label for="body">Taggar</label><br>
        <input type="text" id="tags" placeholder="t.ex. miljö, undervisning" v-on:keyup.space="addTag()" v-model="atag"/>
        <span id="addedTags">{{addedTags}}</span><br>
        <div id="smallText">Var vänlig separera taggarna med mellanslag</div><br>
        <button type="submit" v-on:click="makePost()">Publicera</button><br>
      </form>
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

.makepost {
  padding-top: 2rem;
  padding-bottom: 2rem;
  @include contained();
  h1 {
    margin: 0;
  }
  p {
    font-weight: 400;
  }
}

.form-con {
  position: relative;
}

input[type=text] {
  color: $text-color;
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  font-size: 14px;
  border-radius: 5px;
  border-style:solid;
  text-align: left;
  background-color: #E3E3E3;
  padding: 5px;
  max-width: 500px;
  margin: auto;
}
textarea {
  color: $text-color;
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  font-size: 14px;
  border-radius: 5px;
  border-style:solid;
  text-align: left;
  padding: 5px;
  background-color: #E3E3E3;
  margin: auto;
  min-width: 400px;
  min-height: 300px;
}

#smallText {
  font-size: 12px;
}
</style>
