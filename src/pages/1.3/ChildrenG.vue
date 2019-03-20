<template lang="pug">
  div.border2
    h2 G 节点
    slot
</template>

<script>
export default {
  mounted() {
    console.log('G mounted')
  },

  updated() {
    console.log('G updated')
  },

  destroyed() {
    console.log('G destroyed')
  },
}
</script>


