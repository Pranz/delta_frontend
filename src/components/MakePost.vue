<template>
  <div class="post-container">
    <center>
    <h1 class="title">Skapa inlägg</h1>
    <div class="picker-post">
        <div class="picker-title">
          <input type="text" class="title-input" placeholder="Titel" required v-model="title"/>
        </div>
        <div class="picker-body">
          <textarea class="body-input" placeholder="Innehåll" v-model="body" required></textarea>
        </div>
        <div class="separator"> </div>
        <div class="picker-tags">
          <input type="text" class="tags-input" placeholder="Tag" v-on:keyup.space="addTag()" v-model="atag"/>
          <div class="added-tags">{{addedTags}}</div>
        </div>
        <div class="picker-submit">
          <button class="submit-button" type="submit" v-on:click="makePost()">Publicera</button>
        </div>
      <InfoBubble class="info-bubble" message="Här kan du skapa egna inlägg om ämnen som du tycker är viktiga.
        Se till att du taggar ditt inlägg med relevanta taggar för att andra
        användare ska enklare kunna hitta ditt inlägg." visible="true"></InfoBubble>
    </div>
    </center>
  </div>
</template>

<script>
import InfoBubble from './InfoBubble.vue'

export default {
  name: 'MakePost',
  components: {
    InfoBubble
  },
  data: function () {
    return {
      title: '',
      body: '',
      tags: ''
    }
  },
  computed: {
    completedTags () {
      return this.tags.split(' ')
    }
  },
  methods: {
    makePost: async function () {
      if (this.title.length === 0 || this.body.length === 0) {
        alert('Var vänlig fyll i titel och innehåll')
      } else {
        this.$router.push({name: 'DetailedView', params: {id: '', title: this.title, body: this.body}})
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

textarea {}

.title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;

  width: 600px;

}

.post-container, .picker-post, .picker-title, .picker-body, .picker-tags  {
  display: flex;
  flex-direction: column;
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
}

.post-container {
  padding: 8px;
  margin: 0% auto;

  left: 0;
  right: 0;
  max-width: 1024px;
}

.title-input {
  width: 300px;
  height: 40px;
  font-size: 30px;

  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  border: none;
  border-bottom: solid 2px grey;
  margin: 2px;
}

.body-input {
  width: 600px;
  height: 250px;

  font-size: 18px;
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  border: none;
  background-color: inherit;
}

.separator {
  width: 600px;
  height: 2px;
  background-color: grey;
}

.tags-input {
  width: 100px;
  height: 30px;
  font-size: 18px;

  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  border: none;
  border-bottom: solid 2px grey;
}

.submit-button {
  width: 150px;
  margin-top: 10px;
  font-size: 20px;
}

.picker-body {
  height: 250px;
  width: 600px;
}

.picker-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 600px;
  margin: 5px;
}

.picker-tags {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 600px;
  margin: 5px;
}

.picker-submit {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 600px;
  margin: 5px;
}


.info-bubble {
  position: fixed;

  right: 100px;
  left: 100px;
}










</style>
