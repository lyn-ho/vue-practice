<template lang="pug">
  div
    a-tabs
      a-tab-pane(key='ChildrenA1' tab='index key')
        ChildrenA1
      a-tab-pane(key='ChildrenA2' tab='static key')
        ChildrenA2
</template>

<script>
import ChildrenA1 from './ChildrenA1'
import ChildrenA2 from './ChildrenA2'

export default {
  components: {
    ChildrenA1,
    ChildrenA2
  }
}
</script>

<style>
.border,
.border1,
.border2 {
  border: 1px solid black;
  padding: 10px 0;
  margin: 10px 10px 0;
}

.border1 {
  border-color: #ccc;
}

.border2 {
  border-color: #eee;
}
</style>

