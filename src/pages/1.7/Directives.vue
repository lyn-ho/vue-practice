<template lang="pug">
  div
    h2 v-text
    div(v-text="'hello vue'") hello world

    h2 v-html
    div(v-html="'<span style=&quot;color: red&quot;>hello vue</span>'") hello world

    h2 v-show
    div(v-show='show') hello vue

    button(@click='show = !show') change show

    h2 v-if v-else-if v-else
    div(v-if='number === 1') hello vue {{ number }}
    div(v-else-if='number === 2') hello world {{ number }}
    div(v-else) hello geektime {{ number }}

    h2 v-for v-bind
    div(v-for='num in [1, 2, 3]' v-bind:key='num') hello vue {{ num }}

    h2 v-on
    button(v-on:click='number = number + 1') number++

    h2 v-model
    input(v-model='message')

    h2 v-pre
    div(v-pre) {{ this will not be compiled }}

    h2 v-once
    div(v-once) {{ number }}
</template>

<script>
export default {
  data() {
    this.log = window.console.log

    return {
      show: true,
      number: 1,
      message: 'hello'
    }
  }
}
</script>

