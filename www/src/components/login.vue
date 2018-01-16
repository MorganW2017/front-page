<template>
    <div>
        <div class="ui middle aligned center aligned grid">
            <div class="column">
                <h2 class="ui teal image header">
                    <!-- <img src="assets/images/logo.png" class="image"> -->
                    <div class="content">
                        Log-in to continue
                    </div>
                </h2>
                <form @submit.prevent="userLogin" class="ui large form loginbox">
                    <div class="ui stacked segment login">
                        <div class="field form-group">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input @submit.prevent="userLogin" type="email" name="email" placeholder="E-mail address" v-model='login.email' required>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input @submit.prevent="userLogin" type="password" name="password" placeholder="Password" v-model="login.password">
                            </div>
                        </div>
                        <button @submit.prevent="userLogin" class="ui fluid large teal submit button">Login</button>
                    </div>
                    <div class="ui error message"></div>
                </form>
                <div class="ui message">
                    <div class="registerhere">
                        <div class="regButton">
                            <p @click="toggleRegForm">
                                <span @click="regSeen = !regSeen">New around here?</span>
                            </p>
                            <div v-if="regSeen">
                                <form class="form-horizontal reg-container" role="form">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label" for="inputName">Name:</label>
                                            <div class="col-sm-3 regInput">
                                                <input type="text" size="30" id="inputName" placeholder="Name" v-model="register.name" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label" for="inputEmail">Email:</label>
                                            <div class="col-sm-3 regInput">
                                                <input type="email" size="30" id="inputEmail" placeholder="Email" v-model="register.email" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label" for="inputPassword">Password:</label>
                                            <div class="col-sm-3 regInput">
                                                <input type="password" size="30" id="inputPassword" placeholder="Password" v-model="register.password" />
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
                    email: '',
                    password: ''
                },
                formOption: '',
                regSeen: false
            }
        },
        methods: {
            userLogin() {
                // console.log(login)
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
    .content {
        margin-top: 50px;
    }

    body {
        background-color: #DADADA;
    }

    body>.grid {
        height: 100%;
    }

    .image {
        margin-top: -100px;
    }

    .column {
        max-width: 450px;
    }

    .pic {
        justify-content: center;
        display: flex;
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
        margin-top: 50px;
    }

    .form-group {
        margin-top: 10px;
        align-content: center;
    }

    img {
        display: flex;
        justify-content: center;
        max-width: 100%;

    }

    .action {
        cursor: pointer;
    }
</style>