<template lang="pug">
  div.border1
    h2 C 节点
    ChildrenE
    ChildrenF
</template>

<script>
import ChildrenE from './ChildrenE'
import ChildrenF from './ChildrenF'

export default {
  components: {
    ChildrenE,
    ChildrenF
  }  
}
</script>

