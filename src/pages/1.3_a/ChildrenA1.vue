<template lang="pug">
  div.border
    Children(v-for='(key, index) in list' :key='index')
      button(@click='() => handleDelete(key)') Delete
    button(@click='handleAdd') Add
</template>

<script>
import Children from './Children'

let key = 1

export default {
  components: {
    Children
  },

  data() {
    return {
      list: []
    }
  },

  methods: {
    handleAdd() {
      this.list.push(key++)
    },

    handleDelete(key) {
      const index = this.list.findIndex(k => k === key)
      this.list.splice(index, 1)
    }
  }
}
</script>

