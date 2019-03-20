<template lang="pug">
  div.border1
    h2 C 节点
    slot
</template>

<script>
export default {
  mounted() {
    console.log('C mounted')
  },

  updated() {
    console.log('C updated')
  },

  destroyed() {
    console.log('C destroyed')
  },
}
</script>


