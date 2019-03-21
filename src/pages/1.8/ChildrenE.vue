<template lang="pug">
  div.border2
    h3(:style='{ color: theme.color }') E 节点
    button(@click='handleClick') set color green
</template>

<script>
export default {
  methods: {
    handleClick() {
      if(this.theme.changeColor) {
        this.theme.changeColor('green')
      }
    }
  },

  inject: {
    theme: {
      default: () => ({})
    }
  }
}
</script>

