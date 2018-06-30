<template>
  <div class="container" align="center">
    <div class="about"> Om oss </div>
    <div class="about-text">
      Delta är ett initiativ att öka tillgängligheten på Svensk riksdags information.
      Genom att förenkla disskution kring motioner och dokument hoppas vi kunna stärka
      det Svenska politiska deltagandet.
    </div>
    <div class="contact">
      <div class="contact-field">
        <div class="contact-icon"> <img src="@/assets/vintage-telephone-call.svg" width="30px" height="30px" alt="Telephone missing."></div>
        <div class="contact-cell"> Telefon: 070 133 13 39</div>
      </div>
      <div class="contact-field">
        <div class="contact-icon"> <img src="@/assets/envelope.svg" width="30px" height="30px" alt="Email missing."></div>
        <div class="contact-cell"> Email: delta.snälla@demokrati.se </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style scoped lang="scss">
@import '@/styles/mixins/positioning.scss';
@import '@/styles/color.scss';

.contact, .contact-field {
  display: flex;
  flex-direction: row;
}

.contact {
  justify-content: center;
}

.about {
  font-size: 25px;
}

.about-text {
  padding: 10px;
  width: 600px;
}

.contact-field {
  padding: 10px;
  width: 350px;
  justify-content: center;
}

.contact-cell {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-icon {
  opacity: 0.7;
}

.container {
  vertical-align: bottom;
}
</style>
