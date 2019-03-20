<template lang="pug">
  div
    p props.info: {{ info }}
    p props.name: {{ name }}
    p props.list: {{ list }}
    p data.a: {{ a }}
    p
      button(@click='handleBChange') change data.b
</template>

<script>
export default {
  name: 'PropsAndData',

  props: {
    info: Object,
    name: String,
    list: Array
  },

  data() {
    return {
      a: 'hello',
      b: 'world'
    }
  },

  updated() {
    console.log('Emit PropsAndData updated')
  },

  methods: {
    handleBChange() {
      this.b = `vue ${Date.now()}`
      console.log('data.b 发生了变化，但是并没有触发组件更新', this.b)
    }
  }
}
</script>

