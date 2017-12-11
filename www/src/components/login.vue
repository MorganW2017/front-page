<template>
    <div class="login">
        <div class="row text-center">
            <div class="col-xs-12">
        <h1 v-if="loginForm">Log in to view boards.</h1>
        <h1 v-else>Please register to continue.</h1>
    </div>
    </div>
        <!-- Add error message if login fails -->
        <h5 class="text-danger" v-if="error">
            <b>{{error}}</b>
        </h5>
        <div v-if="loginForm" class="login">
            <form class="form" @submit.prevent="submitLogin">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" type="email" name="email" placeholder="bob@bob.co" v-model='login.email' required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input class="form-control" type="password" placeholder="********" name="password" v-model='login.password' required>
                </div>
                <div class="form-group">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
        <div v-else class="register">
            <form class="form" @submit.prevent="submitRegister">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input class="form-control" type="text" name="name" placeholder="Bob" v-model='register.name' required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" type="email" name="email" placeholder="bob@email.com" v-model='register.email' required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input class="form-control" type="password" name="password" placeholder="********" v-model='register.password' required>
                </div>
                <div class="form-group">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
        <p v-if="loginForm" @click="toggleLoginForm" class="action">Don't have an account? <strong>Sign up!</strong></p>
        <p v-else @click="toggleLoginForm" class="action">Already a user? Click here to login</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loginForm: true,
                login: {
                    email: '',
                    password: ''
                },
                register: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            toggleLoginForm() {
                this.loginForm = !this.loginForm
            },
            submitLogin() {
                this.$store.dispatch('login', this.login)
                this.login = {
                    email: '',
                    password: ''
                }
            },
            submitRegister() {
                this.$store.dispatch('register', this.register)
            }
        },
        computed: {
            error() {
                return this.$store.state.error.message
            }
        }
    }
</script>
<style>
    .action {
        cursor: pointer;
        opacity: .8;
        transition: all .2s linear;
        color: rgb(8, 76, 121);
        font-size: 1.2em
    }

    .action:hover {
        opacity: 1
    }

    
    .form {
        width: 100vw;
        padding-left: 20vw;
        padding-right: 20vw;
        text-align: center;
        
    }

    .form-control{
        text-align: center;
        
    }

    .login{
        background-color: rgba(2, 74, 102, 0.11)
    }

</style>