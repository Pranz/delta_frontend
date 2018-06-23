<template>
  <div class="makepost">
    <h1>Skapa inlägg</h1><br>
    <div id="container">
      <form>
        <label for="title">Titel</label><br>
        <input type="text" id="title" placeholder="Skriv en titel..."/><br><br>
        <label for="body">Innehåll</label><br>
        <textarea id="body" placeholder="Skriv ditt inlägg..."></textarea><br><br>
        <label for="body">Taggar</label><br>
        <input type="text" id="tags" placeholder="t.ex. miljö, undervisning" v-on:keyup.space="addTag()"/>
        <span id="addedTags"></span><br>
        <div id="smallText">Var vänlig separera taggarna med mellanslag</div><br>
        <button type="submit" v-on:click="makePost()">Publicera</button><br>
      </form>
      <div id="box">
        <p>Här kan du skapa egna inlägg om ämnen som du tycker är viktiga.
          Se till att du taggar ditt inlägg med relevanta taggar för att andra
          användare ska enklare kunna hitta ditt inlägg.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MakePost',
  methods: {
    addTag: function () {
      if (document.getElementById('addedTags').innerHTML.length == 0) {
        document.getElementById('addedTags').innerHTML = document.getElementById('tags').value
      } else {
        document.getElementById('addedTags').innerHTML = document.getElementById('addedTags').innerHTML + ', ' + document.getElementById('tags').value
      }
      document.getElementById('tags').value = ''
    },
    makePost: function () {
      alert('makepost')
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
  min-height: 50vh;
  width: 100%;
  h1 {
    margin: 0;
  }
  p {
    font-weight: 400;
  }
}
#container {
  display: flex;
  position: absolute;
  width: 80%;
  padding-bottom: 2rem;
}
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
form {
  float: left;
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
  background-color: #E3E3E3;
  margin: auto;
  min-width: 400px;
  min-height: 300px;
}

#smallText {
  font-size: 12px;
}
</style>
