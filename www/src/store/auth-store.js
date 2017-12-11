import axios from 'axios'

let auth = axios.create({
    baseURL: '//localhost:3000/',
    timeout: 2000,
    withCredentials: true
})

export default {
    actions: {
        login({ commit, dispatch }, payload) {
            auth.post('login', payload).then(res => {
                var user = res.data.data
                if (user) {
                    commit('setUser', user)
                    dispatch('initSocket', user)
                }
            })
        },
        register({ commit, dispatch }, payload) {
            auth.post('register', payload).then(res => {
                var user = res.data.data
                if (user) {
                    commit('setUser', user)
                    dispatch('initSocket', user)
                }
            })
        },
        authenticate({ commit, dispatch }) {
            auth('authenticate').then(res => {
                var user = res.data.data
                if (user) {
                    commit('setUser', user)
                    dispatch('initSocket', user)
                }
            })
        }
    }
}