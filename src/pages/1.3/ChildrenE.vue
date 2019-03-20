<template lang="pug">
  div.border2
    h3 E 节点
    slot
</template>

<script>
export default {
  mounted() {
    console.log('E mounted')
  },

  updated() {
    console.log('E updated')
  },

  destroyed() {
    console.log('E destroyed')
  },
}
</script>


