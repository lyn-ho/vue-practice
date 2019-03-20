<template lang="pug">
  div.border
    h1 A 节点
    button(@click='init = !init') 删除CEF，新建CEF
    div(v-if='init')
      ChildrenB
      ChildrenC
        ChildrenE
        ChildrenF
      ChildrenD
    div(v-else)
      ChildrenB
      ChildrenC
        ChildrenE
        ChildrenF
      ChildrenD
</template>

<script>
import ChildrenB from './ChildrenB'
import ChildrenC from './ChildrenC'
import ChildrenD from './ChildrenD'
import ChildrenE from './ChildrenE'
import ChildrenF from './ChildrenF'

export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD,
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


