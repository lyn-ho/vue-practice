<template lang="pug">
  page
    a-tabs
      a-tab-pane(key='ChildrenA1' tab='1-移动')
        ChildrenA1
      a-tab-pane(key='ChildrenA2' tab='1-删除新建')
        ChildrenA2
      a-tab-pane(key='ChildrenA3' tab='1-删除新建')
        ChildrenA3
      a-tab-pane(key='ChildrenA4' tab='1-更新新建（无 key）')
        ChildrenA4
      a-tab-pane(key='ChildrenA5' tab='1-移动（有 key）')
        ChildrenA5
      a-tab-pane(key='ChildrenA6' tab='1-更新插入（无 key）')
        ChildrenA6
      a-tab-pane(key='ChildrenA7' tab='1-插入（有 key）')
        ChildrenA7
</template>

<script>
import ChildrenA1 from './ChildrenA1'
import ChildrenA2 from './ChildrenA2'
import ChildrenA3 from './ChildrenA3'
import ChildrenA4 from './ChildrenA4'
import ChildrenA5 from './ChildrenA5'
import ChildrenA6 from './ChildrenA6'
import ChildrenA7 from './ChildrenA7'

export default {
  components: {
    ChildrenA1,
    ChildrenA2,
    ChildrenA3,
    ChildrenA4,
    ChildrenA5,
    ChildrenA6,
    ChildrenA7,
  }
}
</script>

<style lang="less">
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


