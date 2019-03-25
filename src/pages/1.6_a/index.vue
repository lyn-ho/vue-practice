<template lang="pug">
  div
    Spike(:start-time='startTime' :end-time='endTime')
</template>

<script>
import moment from 'moment'
import Spike from './Spike'

export default {
  components: {
    Spike
  },

  data() {
    return {
      startTime: moment('2019-03-28 14:05:00'),
      endTime: moment('2019-03-28 14:20:00')
    }
  }
}
</script>

