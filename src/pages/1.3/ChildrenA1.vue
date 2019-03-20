<template lang="pug">
  div.border
    h1 A 节点
    button(@click='orderAsc = !orderAsc') 移动
    div(v-if='orderAsc')
      ChildrenB
      ChildrenC
      ChildrenD
    div(v-else)
      ChildrenC
      ChildrenD
      ChildrenB
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
      orderAsc: true
    }
  }
}
</script>

