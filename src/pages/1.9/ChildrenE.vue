<template lang="pug">
  div.border2
    h3(v-ant-ref='c => setChildrenRef("childrenE", c)') E 节点
</template>

<script>
export default {
  inject: {
    setChildrenRef: {
      default: () => {}
    }
  }
}
</script>
