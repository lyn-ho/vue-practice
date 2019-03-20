<template lang="pug">
  div.border2
    h3 F 节点
    slot
</template>

<script>
export default {
  mounted() {
    console.log('F mounted')
  },

  updated() {
    console.log('F updated')
  },

  destroyed() {
    console.log('F destroyed')
  },
}
</script>


