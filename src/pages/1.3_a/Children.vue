<template lang="pug">
  div.border2
    input(v-model='phone' type='number')
    slot
</template>

<script>
export default {
  data() {
    return {
      phone: ''
    }
  }
}
</script>

