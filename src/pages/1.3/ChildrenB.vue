<template lang="pug">
  div.border1
    h2 B 节点 {{ number }}
    slot
</template>

<script>
export default {
  props: {
    number: Number
  },

  mounted() {
    console.log(`B${this.number || ''} mounted`)
  },

  updated() {
    console.log(`B${this.number || ''} updated`)
  },

  destroyed() {
    console.log(`B${this.number || ''} destroyed`)
  }
}
</script>

