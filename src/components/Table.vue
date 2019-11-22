<template>
  <div class="content">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    // First get pairs
    this.$store.dispatch('loadPairs')
    let data = this.$store.getters.getPairs
    this.items = data

    // Setting a 15 second interval to get pairs
    setInterval(() => {
      this.$store.dispatch('loadPairs')
      data = this.$store.getters.getPairs
      if (JSON.stringify(this.items) !== JSON.stringify(data)) {
        this.items = data
      }
    }, 15000)
  }
}
</script>
