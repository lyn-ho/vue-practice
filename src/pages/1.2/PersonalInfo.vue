<template lang="pug">
  div
    select(:value='phoneInfo.areaCode'
    placeholder='area code'
    @change='handleAreaCodeChange')
      option(value='+86') +86
      option(value='+60') + 60
    
    input(:value='phoneInfo.phone'
    type='number'
    placeholder='phone number'
    @input='handlePhoneChange')

    input(:value='zipCode'
    type='number'
    placeholder='zipcode'
    @input='handleZipCodeChange')
</template>

<script>
export default {
  name: 'PersonalInfo',

  model: {
    prop: 'phoneInfo',
    event: 'change'
  },

  props: {
    phoneInfo: Object,
    zipCode: String
  },

  methods: {
    handleAreaCodeChange(e) {
      this.$emit('change', {
        ...this.phoneInfo,
        areaCode: e.target.value
      })
    },

    handlePhoneChange(e) {
      this.$emit('change', {
        ...this.phoneInfo,
        phone: e.target.value
      })
    },

    handleZipCodeChange(e) {
      this.$emit('update:zipCode', e.target.value)
    }
  },
}
</script>


