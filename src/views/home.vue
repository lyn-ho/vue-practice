<template lang="pug">
  #nav 
    template(v-for="({path, name}, i) in routes")
      div.nav-route(:key="i")
        router-link(:to='path') {{`1.${i} ${name}`}}
  
</template>

<script>
export default {
  name: 'Home',

  computed: {
    routes() {
      return this.$router.options.routes.filter((route) => route.path !== '/')
    }
  }
}
</script>

<style lang="less">
#nav {
  padding: 30px;

  .nav-route {
    margin: 10px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>



