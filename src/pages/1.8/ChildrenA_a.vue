<template lang="pug">
  div.border
    h1 A 节点
    button(@click='() => changeColor()') change color
    ChildrenB
    ChildrenC
    ChildrenD
</template>

<script>
import Vue from 'vue'

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
    const data = {
      color: 'blue'
    }

    this.theme = Vue.observable({
      color: data.color
    })

    return data
  },

  watch: {
    color(val) {
      this.theme.color = val
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



