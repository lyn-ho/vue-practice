<template lang="pug">
  div.border2
    h3 F 节点
    button(@click='getARef') get A Ref
    button(@click='getHRef') get H Ref
</template>

<script>
export default {
  methods: {
    getARef() {
      console.log(this.getParentRef())
    },

    getHRef() {
      console.log(this.getParentChildrenRef('childrenH'))
    }
  },

  inject: {
    getParentRef: {
      from: 'getRef',
      default: () => {}
    },

    getParentChildrenRef: {
      from: 'getChildrenRef',
      default: () => {}
    }
  }
}
</script>


