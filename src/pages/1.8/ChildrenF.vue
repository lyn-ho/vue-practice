<template lang="pug">
  div.border2
    h3(:style='{ color: theme1.color }') F 节点
</template>

<script>
export default {
  inject: {
    theme1: {
      from: 'theme',
      default: () => ({})
    }
  }
}
</script>

