<template lang="pug">
  div
    select(
      :value='phoneInfo.areaCode'
      placeholder='area code'
      @change='handleAreaCodeChange')
      option(value='+86') +86
      option(value='+60') +60
    
    input(
      :value='phoneInfo.phone'
      type='number'
      placeholder='phone number'
      @input='handlePhoneChange'
    )

    input(
      :value='zipCode'
      type='number'
      placeholder='zip code'
      @input='handleZipCodeChange'
    )
    br
    span.personal-info-warning(v-if='showMessage') {{ message }}
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
    zipCode: String,
    required: Boolean,
    message: String,
    validate: Function
  },

  data() {
    return {
      showMessage: false
    }
  },

  watch: {
    'phoneInfo.phone': function(val) {
      this.handleValidate(val)
    }
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
    },

    handleValidate(val) {
      const res = this.validate(val)
      this.showMessage = !res
    }
  }
}
</script>

<style lang="less">
.personal-info-warning {
  color: red;
}
</style>

