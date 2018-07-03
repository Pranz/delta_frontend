<template>
  <div id="container" align="center">
    <div id="container">
      <h1>Kontakta oss</h1>
      <p v-if="success">Ditt meddelande har skickats, vi kommer att kontakta dig inom kort!</p>
      <form v-if="!success">
        <label for="email">Email</label><br>
        <input v-model="email" type="email" id="email" placeholder="exempel@delta.se" required><br><br>
        <textarea v-model="body" placeholder="Ditt meddelande" id="body" required></textarea>
        <div class="separator"> </div>
        <button type="submit" v-on:click="sendMsg()">Skicka</button><br>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data () {
    return {
      email: '',
      body: '',
      success: false
    }
  },
  methods: {
    sendMsg: function () {
      // WHAT NOW?
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';
@import '@/styles/input.scss';

#container {
  overflow:auto;
  margin: auto;
  width: 600px;
}
#email {
  width: 400px;
}
#body {
  width: 400px;
}
.separator {
  width: 400px;
  height: 2px;
  background-color: grey;
  margin-bottom: 20px;
}
</style>
