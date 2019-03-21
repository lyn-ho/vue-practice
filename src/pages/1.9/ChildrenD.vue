<template lang="pug">
  div.border2
    h2 D 节点
    ChildrenG
    ChildrenH(v-ant-ref='c => setChildrenRef("childrenH", c)')
    ChildrenI
</template>

<script>
import ChildrenG from './ChildrenG'
import ChildrenH from './ChildrenH'
import ChildrenI from './ChildrenI'

export default {
  components: {
    ChildrenG,
    ChildrenH,
    ChildrenI
  },

  inject: {
    setChildrenRef: {
      default: () => {}
    }
  }
}
</script>


