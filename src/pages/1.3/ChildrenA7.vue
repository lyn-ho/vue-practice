<template lang="pug">
  div.border
    h1 A 节点
    button(@click='init = !init') 新建（有 key）

    div(v-if='init')
      ChildrenB(key='1' :number='1')
      ChildrenB(key='2' :number='2')
      ChildrenB(key='3' :number='3')
    div(v-else)
      ChildrenB(key='1' :number='1')
      ChildrenB(key='4' :number='4')
      ChildrenB(key='2' :number='2')
      ChildrenB(key='3' :number='3')
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

