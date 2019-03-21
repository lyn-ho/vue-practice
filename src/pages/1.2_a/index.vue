<template lang="pug">
  div
    PersonalInfo(
      v-model='phoneInfo'
      required
      :validate='validate'
      message='phone number is invalidate'
      :zip-code.sync='zipCode'
    ) 
    | phoneInfo {{ phoneInfo }}
    br
    | zipCode: {{ zipCode }}
</template>

<script>
import PersonalInfo from './PersonalInfo'

export default {
  components: {
    PersonalInfo
  },

  data() {
    return {
      phoneInfo: {
        areaCode: '+86',
        phone: ''
      },

      zipCode: ''
    }
  },

  methods: {
    validate(phone = '') {
      return phone && /^1[0-9]{10}$/.test(phone)
    }
  }
}
</script>

