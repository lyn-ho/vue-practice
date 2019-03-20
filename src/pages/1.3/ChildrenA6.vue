<template lang="pug">
  div.border
    h1 A 节点
    button(@click='init = !init') 更新新建（无 key）
    div(v-if='init')
      ChildrenB(:number='1')
      ChildrenB(:number='2')
      ChildrenB(:number='3')
    div(v-else)
      ChildrenB(:number='1')
      ChildrenB(:number='4')
      ChildrenB(:number='2')
      ChildrenB(:number='3')
</template>

<script>
import ChildrenB from './ChildrenB'

export default {
  components: {
    ChildrenB
  },

  data() {
    return {
      init: true
    }
  }
}
</script>

