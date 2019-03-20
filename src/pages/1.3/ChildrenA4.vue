<template lang="pug">
  div.border
    h1 A 节点
    button(@click='init = !init') 更新删除新建

    div(v-if='init')
      ChildrenB(:number='1')
      ChildrenB(:number='2')
        ChildrenE
        ChildrenF
      ChildrenB(:number='3')
    div(v-else)
      ChildrenB(:number='2')
        ChildrenE
        ChildrenF
      ChildrenB(:number='1')
      ChildrenB(:number='3')
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

