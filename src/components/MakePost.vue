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
          <input type="text" class="tags-input" placeholder="Taggar" v-on:keyup="addTag" v-model="atag"/>
          <div class="tags-display">
            <div class="tag" v-bind:key="tag" v-for="tag in tags">
              <div class="tagvalue">{{tag}}</div>
            </div>
          </div>
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
      tags: [],
      atag: ''
    }
  },
  computed: {
    completedTags () {
      return this.tags
    }
  },
  methods: {
    addTag: function (event) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        this.tags.push(this.atag)
        this.atag = ''
      }
    },
    makePost: async function () {
      if (this.title.length === 0 || this.body.length === 0) {
        alert('Var vänlig fyll i titel och innehåll')
      } else {
        this.$router.push({name: 'DetailedView', params: {id: '', title: this.title, body: this.body, tags: this.tags}})
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

.tag {
  width: auto;
  padding: 3px;
  margin: 5px;

  background-color: $warm-grey;
  opacity: 0.7;
  border-radius: 5px;
}

.tag:hover {
  cursor: pointer;
  opacity: 0.5;
}

.tags-display {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 3px;
  flex-wrap: wrap;
}

.title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  width: 600px;
  color: $text-color;
}

.post-container, .picker-post, .picker-title, .picker-body, .picker-tags  {
  display: flex;
  flex-direction: column;
  color: $text-color;
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
}

.post-container {
  padding: 8px;
  margin: 0% auto;
  left: 0;
  right: 0;
  max-width: 1024px;
  color: $text-color;
}

.title-input {
  color: $text-color;
  width: 300px;
  height: 40px;
  font-size: 24px;
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  border: none;
  border-bottom: solid 2px grey;
  margin: 2px;
}

.body-input {
  width: 600px;
  height: 250px;
  color: $text-color;
  font-size: 18px;
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  border: none;
  background-color: inherit;
}

.picker-post {
  width: 600px;
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
  color: $text-color;
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
