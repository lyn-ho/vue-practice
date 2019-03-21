<template lang="pug">
  div.border
    h1 A 节点
    button(@click='getEH3HRef') get E h3 Ref
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
    getEH3HRef() {
      console.log(this.childrenE)
    }
  },

  provide() {
    return {
      setChildrenRef: (name, ref) => {
        this[name] = ref
      },

      getChildrenRef: name => {
        return this[name]
      },

      getRef: () => {
        return this
      }
    }
  }
}
</script>

