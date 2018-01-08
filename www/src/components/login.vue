<template>
    <div>
        <div class="top container">
            <div class="loginbox">
                <div class='login'>
                    <form @submit.prevent="userLogin" class="form-horizontal">
                        <div class="form-group">
                            <label for="loginPassword" class="white">Password</label>
                            <div>
                                <input type="password" id="loginPassword" placeholder="Password" size="35" v-model="login.password" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class=" col-sm-12">
                                <button type="submit" class="btn btn-default text-center">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="registerhere">
            <div class="regButton">
                <p @click="toggleRegForm">
                    <span @click="regSeen = !regSeen">Don't have an account? Register here.</span>
                </p>
                <div v-if="regSeen">
                    <form class="form-horizontal reg-container" role="form">
                        <div class="form-group">
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputName">Name:</label>
                                <div class="col-sm-3 regInput">
                                    <input type="text" size="40" id="inputName" placeholder="Name" v-model="register.name" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputEmail">Email:</label>
                                <div class="col-sm-3 regInput">
                                    <input type="email" size="40" id="inputEmail" placeholder="Email" v-model="register.email" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputPassword">Password:</label>
                                <div class="col-sm-3 regInput">
                                    <input type="password" size="40" id="inputPassword" placeholder="Password" v-model="register.password" />
                                </div>
                            </div>
                            <div class="form-group regSub-container">
                                <div class="col-sm-offset-2 col-sm-3">
                                    <button @click="userRegister" data-dismiss="modal" class="btn btn-default">Register Me</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                showRegForm: false,
                register: {
                },
                login: {
                    password: ''
                },
                formOption: '',
                regSeen: false
            }
        },
        methods: {
            userLogin() {
                this.$store.dispatch('userLogin', this.login)
            },
            userRegister() {
                this.$store.dispatch('userRegister', this.register)
                this.toggleRegForm()
            },
            toggleForms() {
                this.showForm = !this.showForm
            },
            toggleRegForm() {
                this.showRegForm = !this.showRegForm
            }
        }
    }
</script>
<style>
    .header {
        display: flex;
        justify-content: center;
    }

    .regInput {
        width: 15%;
        margin-left: 1rem;
        display: flex;
        justify-content: center;

    }

    .registerhere {
        display: flex;
        justify-content: center;
    }

    .top {
        display: flex;
        justify-content: center;
        border-radius: 50%;
    }

    .form-group {
        display: flex;
        justify-content: center;
        width: 200px;

    }

    .loginbox {
        background-color: rgba(8, 248, 20, 0.815);
        padding: .5rem;
        height: 200px;
        width: 200px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
    }

    .action {
        cursor: pointer;
    }

    .logo {
        height: 25rem;
    }
</style>