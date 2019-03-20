<template lang="pug">
  div.border
    h1 A 节点
    button(@click='init = !init') 移动（有 key）
    div(v-if='init')
      ChildrenB(key='1' :number='1')
      ChildrenB(key='2' :number='2')
        ChildrenE
        ChildrenF
      ChildrenB
      ChildrenB(key='3' :number='3')
    div(v-else)
      ChildrenB(key='2' :number='2')
        ChildrenE
        ChildrenF
      ChildrenB
      ChildrenB(key='1' :number='1')
      ChildrenB(key='3' :number='3')
</template>

<script>
import ChildrenB from './ChildrenB'
import ChildrenE from './ChildrenE'
import ChildrenF from './ChildrenF'

export default {
  components: {
    ChildrenB,
    ChildrenE,
    ChildrenF
  },

  data() {
    return {
      init: true
    }
  }
}
</script>

