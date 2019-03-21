<template lang="pug">
  div {{ fullName }}
  

    div firstName:
      input(v-model='firstName')
    div lastName:
      input(v-model='lastName')
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    }
  },

  watch: {
    firstName: function(val) {
      clearTimeout(this.firstTimeout)
      this.firstTimeout = setTimeout(() => {
        this.fullName = `${val} ${this.lastName}`
      }, 500)
    },

    lastName: function(val) {
      clearTimeout(this.lastTimeout)
      this.lastTimeout = setTimeout(() => {
        this.fullName = `${this.firstName} ${val}`
      }, 500)
    }
  }
}
</script>

