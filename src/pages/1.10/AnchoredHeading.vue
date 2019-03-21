<template lang="pug">
  h1(v-if='level === 1')
    slot
  h2(v-else-if='level === 2')
    slot
  h3(v-else-if='level === 3')
    slot
  h4(v-else-if='level === 4')
    slot
  h5(v-else-if='level === 5')
    slot
  h6(v-else-if='level === 6')
    slot
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  }
}
</script>

