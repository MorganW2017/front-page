<template>
  <div>
    <span @click="userLogout">
      <p class="logout-header">Logout</p>
    </span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        register: {},
        login: {},
      }
    },
    name: 'home',
    mounted() {
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      userLogout() {
        this.$store.dispatch('logout', this.$store.state.user._id)
      }
    }
  }
</script>

<style scoped>
</style>