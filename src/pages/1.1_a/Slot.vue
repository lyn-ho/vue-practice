<template lang="pug">
  div
    slot
    slot(name='title')
    slot(name='item' v-bind='{ value: "vue" }')
</template>

<script>
export default {
  name: 'SlotDemo'
}
</script>

