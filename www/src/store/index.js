import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//morgan-get.herokuapp.com/' : '//localhost:3000/';

let api = axios.create({
    baseURL: baseUrl + 'api/',
    timeout: 2000,
    withCredentials: true
})


let api = axios.create({
    baseURL: '//localhost:3000/api/',
    timeout: 2000,
    withCredentials: true
})

Vue.use(Vuex)

var store = new vuex.Store({
    state: {
        error: {},
        user: {},
    },
    mutations: {
        handleError(state, err) {
            state.error = err
        },
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        //ERROR FUNCTIONS
        handleError({ commit, dispatch }, err) {
            commit('handleError', err)
        },
        //LOGIN FUNCTIONS
        login({ commit, dispatch }, payload) {

            auth.post('login', payload)
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Boards' })
                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        register({ commit, dispatch }, payload) {

            auth.post('register', payload)
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Boards' })
                    console.log('User account successfully created')
                })
                .catch(err => {
                    commit('handleError', err)
                })

        },
        logout({ commit, dispatch }) {
            auth.delete('logout')
                .then(res => {
                    commit('setUser', {})
                    router.push({ name: 'Login' })
                    console.log('User session terminated')
                })
                .catch(err => {
                    commit('handleError', err)
                })

        },
        authenticate({ commit, dispatch }) {
            auth.get('authenticate')
                .then(res => {

                    router.push({ name: 'Boards' })
                    commit('setUser', res.data.data)
                })
                .catch(err => {

                    commit('handleError', err)
                    router.push({ name: 'Login' })
                })

        }
    }
})

export default store


