<template lang="pug">
  div
    a-tabs
      a-tab-pane(key='1' tab='exercise 1')
        Proxy(:info='info' @change='handleProxyChange')
      a-tab-pane(key='2' tab='exercise 2')
        Event(:name='name' @change='handleEventChange')
      a-tab-pane(key='3' tab='exercise 3')
        h2 2.6 new syntax
        SlotDemo
          p default slot
          template(v-slot:title)
            p title slot1
            p title slot2
          template(v-slot:title)
            p new title slot1
            p new title slot2
          template(v-slot:item='props')
            p item slot-scope {{ props }}
          template(v-slot:itme='props')
            p new item slot-scope {{ props }}
        br
        h2 old syntax
        SlotDemo
          p default slot
          p(slot='title') title slot1
          p(slot='title') new title slot2
          p(slot='item' slot-scope='props') item slot-scope {{ props }}
          p(slot='item' slot-scope='props') new item slot-scope {{ props }}
</template>

<script>
import Event from './Event'
import Proxy from './Proxy.vue'
import Slot from './Slot'

export default {
  components: {
    Event,
    SlotDemo: Slot,
    Proxy
  },

  data() {
    return {
      name: '',
      type: 'success',
      info: {}
    }
  },

  methods: {
    handleProxyChange(val) {
      window.isUpdatingChildComponent = true
      this.info.name = val
      this.info = { name: val }
    },

    handleEventChange(val, cb) {
      this.name = val
      if(cb && typeof cb === 'function')
        cb('hello')
      return 'hello'
    }
  },

  mounted() {
    window.info1 = this.info
  }
}
</script>

