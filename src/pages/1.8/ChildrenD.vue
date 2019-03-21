<template lang="pug">
  div.border1
    h2 D 节点
    ChildrenG
    ChildrenH
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
  }
}
</script>

