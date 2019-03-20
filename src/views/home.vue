<template lang="pug">
  #nav test
    
  
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>



