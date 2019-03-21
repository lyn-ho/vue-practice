<template lang="pug">
  page
    a-tabs
      a-tab-pane(key='1' tab='chapter 1')
        First
      a-tab-pane(key='2' tab='chapter 2')
        Second
      a-tab-pane(key='3' tab='chapter 3')
        Third
      a-tab-pane(key='6' tab='chapter 6')
        Sixth
      a-tab-pane(key='7' tab='chapter 7')
        Seventh
      a-tab-pane(key='10' tab='chapter 10')
        Tenth
</template>

<script>
import First from '../1.1_a'
import Second from '../1.2_a'
import Third from '../1.3_a'
import Sixth from '../1.6_a'
import Seventh from '../1.7_a'
import Tenth from '../1.10_a'

export default {
  components: {
    First,
    Second,
    Third,
    Sixth,
    Seventh,
    Tenth
  }
}
</script>


