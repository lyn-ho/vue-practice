<template lang="pug">
  page
    a-tabs
      a-tab-pane(key='Directives' tab='内置指令')
        Directives
      a-tab-pane(key='CustomerDirectives' tab='自定义指令')
        CustomerDirectives
</template>

<script>
import Directives from './Directives'
import CustomerDirectives from './CustomerDirectives'

export default {
  components: {
    Directives,
    CustomerDirectives
  }
}
</script>


