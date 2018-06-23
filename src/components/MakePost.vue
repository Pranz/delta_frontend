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
        <input type="text" id="tags" placeholder="Ex. #miljö, #undervisning" v-on:keyup.enter="addTag()"/><br><br>
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
    makePost: function () {
      alert('makepost')
    },
    addTag: function () {
      alert('make tag')
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
  border-radius: 5px;
  border-style:solid;
  text-align: left;
  background-color: #E3E3E3;
  margin: auto;
}
</style>
