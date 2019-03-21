<template lang="pug">
  div name: {{ name || '--' }}
    br
    input(:value='name' @change='handleChange')
    br
    br
    div(@click='handleDivClick')
      button(@click='handleClick') reset success
      | &nbsp;&nbsp;&nbsp;
      button(@click.stop='handleClick') reset fail
</template>

<script>
export default {
  name: 'EventDemo',

  props: {
    name: String
  },

  methods: {
    handleChange(e) {
      const res = this.$emit('change', e.target.value, val => {
        console.log(val)
      })
      console.log(res, res === this)
    },

    handleDivClick() {
      this.$emit('change', '')
    },

    handleClick(e) {
      e.stopPropagation()
    }
  }
}
</script>

