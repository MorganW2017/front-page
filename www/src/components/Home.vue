<template>
        <div>

        </div>
      </template>
      
      <script>
      
        export default {
          data() {
            return {
              showLogin: true,
              showReset: false,
              formAction: this.login,
              user: {}
            }
          },
          computed: {
            activeUser() {
              return this.$store.state.user
            }
          },
          mounted() {
            console.log("mounting login...")
          },
          components:{
            Chat
          }
        }
      </script>
      
      
      <style scoped>
        body,
        html {
          background: #555 !important
        }
      </style>