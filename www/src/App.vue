<template>
  <div id="app">
    <error></error>
    <router-view></router-view>
  </div>
</template>

<script>
  import Error from './components/Error'
  export default {
    name: 'app',
    components: {
      Error
    },
    mounted() {
      this.$store.dispatch('authenticate')
    }
  }
</script>

<style>
</style>