<template lang="pug">
  div info {{ info }}
    input(:value='info.name' @input='handleChange')
</template>

<script>
import proxy from './proxy.js'

export default {
  props: {
    info: Object
  },

  methods: {
    handleChange(e) {
      this.info.name = e.target.value
      this.$forceUpdate()
    }
  },

  created() {
    this.temp = { name: '' }
    Object.keys(this.temp).forEach(key => {
      proxy(this.info, this.temp, key)
    })
  }
}
</script>

