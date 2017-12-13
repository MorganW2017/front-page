<template>
        <div class="center dark">
          <h1>{{activeUser.name}}</h1>
          <div class="content no-select" v-if="!activeUser.name">
            <img class="responsive-img" src="https://bcw.blob.core.windows.net/public/img/www/assets/img/logos/cw-logo-square-black-outline.png"
              width="250" />
            <div class="section">
              <div class="z-depth-1 grey lighten-4 row">
                <form class="col s12 text-black" @submit.prevent="formAction" v-if="!showReset">
                  <div class="row m-t-2" v-if="!showLogin">
                    <div class="input-field col s12">
                      <input class="validate" v-model="user.name" type="text" name="name" />
                      <label for="name">Enter your Name</label>
                    </div>
                  </div>
                  <div class="row m-t-2">
                    <div class="input-field col s12">
                      <input class="validate" v-model="user.email" type="email" name="email" />
                      <label for="email">Enter your email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input class="validate" v-model="user.password" type="password" name="password" />
                      <label for="password">Enter your password</label>
                    </div>
                    <label style="float: right">
                      <div class="action muted pink-text" @click="showReset = true">
                        <b>Forgot Password?</b>
                      </div>
                    </label>
                  </div>
                  <center>
                    <div class="row">
                      <button class="hoverable col s12 btn btn-large waves-effect btn-theme" type="submit" name="btn_login">{{showLogin ? 'Login' : 'Register'}}</button>
                    </div>
                  </center>
                </form>
                <form class="col s12 text-black" @submit.prevent="reset" v-else>
                  <div class="row m-t-2">
                    <div class="input-field col s12">
                      <input class="validate" v-model="user.email" type="email" name="email" />
                      <label for="email">Enter your email</label>
                    </div>
                    <label style="float: right">
                      <div class="action muted pink-text" @click="showReset = false">
                        <b>login</b>
                      </div>
                    </label>
                  </div>
                  <center>
                    <div class="row">
                      <button class="hoverable col s12 btn btn-large waves-effect btn-theme" type="submit" name="btn_login">Reset Password</button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
            <div class="action muted light-blue-text" @click="toggleFormAction">{{showLogin ? 'Create account' : 'Show Login'}}</div>
          </div>
      
          <div class="chathome" v-else>
            <h3>lets chat</h3>
            <ul>
              <li v-for="u in connectedUsers">
                {{u.name}}
              </li>
            </ul>
            <chat></chat>
          </div>
      
        </div>
      </template>
      
      
      
      
      <script>
        import Chat from './Chat'
      
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
            },
            connectedUsers() {
              return this.$store.state.socketStore.connectedUsers
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