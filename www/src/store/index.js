import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from 'router'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';


let baseUrl = window.location.host.indexOf('localhost') > -1 ? '//localhost:3000/' : '/'

let api = axios.create({
    baseURL: baseUrl + 'api/',
    timeout: 2000,
    withCredentials: true
})


let auth = axios.create({
    baseURL: baseUrl,
    timeout: 2000,
    withCredentials: true
})

Vue.use(Vuex)
Vue.use(SuiVue);


var store = new Vuex.Store({
    state: {
        home: [],
        error: {},
        user: {}
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        },
        handleError(state, err) {
            state.error = err
        },
    },
    actions: {

        //---------LOGIN/REGISTER/LOGOUT-----------//
        userLogin({ commit, dispatch }, login) {
            console.log(login)
            auth.post('login', login)
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Home' })
                })
                .catch(() => {
                    router.push({ name: "Login" })
                })
        },
        userRegister({ commit, dispatch }, register) {
            auth.post('register', register)
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Home' })
                })
                .catch(err => {
                    commit('handleError', err)
                    router.push({ name: "Login" })
                })
        },
        authenticate({ commit, dispatch }) {
            auth('authenticate')
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Home' })
                })
                .catch(() => {
                    router.push({ name: "Login" })
                })
        },
        logout({ commit, dispatch }, user) {
            auth.delete('logout')
                .then(res => {
                    console.log(res)
                    dispatch('authenticate')
                })
                .catch(err => {
                    console.log(err)
                    res.status(401).send({ Error: err })
                })
        },
        //^^^^^^^^^^^^^^USER/REGISTER/LOGOUT^^^^^^^^^^^//

        handleError({ commit, dispatch }, err) {
            commit('handleError', err)
        }
    }
})
export default store