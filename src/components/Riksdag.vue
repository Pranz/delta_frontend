<template>
  <div class="container">
    <h1>Sök igenom riksdagen</h1>
  </div>
</template>

<script>
// parameters: ?sok=&doktyp=kam-ad&rm=&from=&tom=2018-06-19&ts=&bet=&
// tempbet=&nr=&org=&iid=&webbtv=&talare=&exakt=&planering=&sort=rel&
// sortorder=desc&rapport=&utformat=xml&a=s#soktraff

import { searchDocs } from '@/common/api'

export default {
  name: 'Riksdag',
  data () {
    return {
      searchTerm: '',
      startDate: '',
      endDate: '',
      documents: []
    }
  },
  created () {
    this.fetchDocs()
  },
  methods: {
    async fetchDocs () {
      const response = await searchDocs({
        sok: this.searchTerm,
        from: this.startDate,
        tom: this.endDate
      })
      console.log(response)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/positioning.scss';

.container {
  @include contained();
}
</style>
