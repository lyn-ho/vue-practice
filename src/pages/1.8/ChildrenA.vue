<template lang="pug">
  div.border
    h1 A 节点
    button(@click='() => changeColor()') change color
    ChildrenB
    ChildrenC
    ChildrenD
</template>

<script>
import ChildrenB from './ChildrenB'
import ChildrenC from './ChildrenC'
import ChildrenD from './ChildrenD'

export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },

  data() {
    return {
      color: 'blue'
    }
  },

  methods: {
    changeColor(color) {
      if(color) {
        this.color = color
      } else {
        this.color = this.color === 'blue' ? 'red' : 'blue'
      }
    }
  },

  provide() {
    return {
      theme: {
        color: this.color
      }
    }
  }
}
</script>

