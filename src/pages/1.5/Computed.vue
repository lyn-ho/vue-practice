<template lang="pug">
  div
    p Reversed message1: {{ reversedMessage1 }}
    p Reversed message2: {{ reversesMessage2() }}
    p {{ now }}
    button(@click='() => $forceUpdate()') forceUpdate
    br
    input(v-model='message')
</template>

<script>
export default {
  data() {
    return {
      message: 'hello vue'
    }
  },

  computed: {
    reversedMessage1() {
      console.log('reverse message1')
      return this.message.split('').reverse().join('')
    },

    now() {
      return Date.now()
    }
  },

  methods: {
    reversesMessage2() {
      console.log('reverse message2')
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

