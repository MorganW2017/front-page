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
          methods: {
            login: function (e) {
              e.preventDefault()
              this.$store.dispatch('login', this.user)
            },
            register() {
              this.$store.dispatch('register', this.user)
            },
            toggleFormAction() {
              this.showLogin = !this.showLogin
              this.formAction = this.showLogin ? this.login : this.register
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