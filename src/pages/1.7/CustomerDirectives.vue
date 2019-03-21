<template lang="pug">
  div
    button(@click='show = !show') 销毁
    button(v-if='show' v-append-text='`hello ${number}`' @click='number++') number++
</template>

<script>
export default {
  directives: {
    appendText: {
      bind() {
        console.log('bind')
      },

      inserted(el, binding) {
        el.appendChild(document.createTextNode(binding.value))
        console.log('inserted', el, binding)
      },

      update() {
        console.log('update')
      },

      componentUpdated(el, binding) {
        el.removeChild(el.childNodes[el.childNodes.length - 1])
        el.appendChild(document.createTextNode(binding.value))
        console.log('componentUpdated')
      },

      unbind() {
        console.log('unbind')
      }
    }
  },

  data() {
    return {
      number: 1,
      show: true
    }
  }
}
</script>

