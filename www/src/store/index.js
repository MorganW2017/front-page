import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import authStore from './auth-store'
import socketStore from './socket-store'

let api = axios.create({
    baseURL: '//localhost:3000/api/',
    timeout: 2000,
    withCredentials: true
})

Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        user: {},
        messages: []
    },
    modules:{
        authStore,
        socketStore
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setResource(state, payload){
            state[payload.resource] = payload.data
        },
        addToResource(state, payload){
            if(Array.isArray(state[payload.resource])){
                state[payload.resource].push(payload.data)
            }else if(typeof state[payload.resource] == 'object'){
                state[payload.resource][payload.data._id] = payload.data
            }
        }
    },
    actions: {
        create({commit, dispatch}, payload){
            api.post(payload.endpoint, payload.data).then(res => {
                payload.data = res.data.data
                commit('setResource', payload)
                if(payload.emit){
                    payload.mutation = 'setResource'
                    dispatch('emitData', payload)
                }
            })
        },
        createOne({commit, dispatch}, payload){
            api.post(payload.endpoint, payload.data).then(res => {
                payload.data = res.data.data
                commit('addToResource', payload)
                if(payload.emit){
                    payload.mutation = 'addToResource'
                    dispatch('emitData', payload)
                }
            })
        },
        get({commit, dispatch}, payload){
            api(payload.endpoint).then(res => {
                payload.data = res.data.data
                commit('setResource', payload)
            })
        }
    }
})


export default store


