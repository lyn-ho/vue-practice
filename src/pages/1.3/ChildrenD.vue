<template lang="pug">
  div.border1
    h2 D 节点
    slot
</template>

<script>
export default {
  mounted() {
    console.log('D mounted')
  },

  updated() {
    console.log('D updated')
  },

  destroyed() {
    console.log('D destroyed')
  },
}
</script>


