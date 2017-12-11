import io from 'socket.io-client'
let socket = {}

export default {
    state: {
        connectedUsers: {}
    },
    mutations: {
        setUsers(state, users) {
            state.connectedUsers = users
        },
        addUser(state, user) {
            state.connectedUsers[user.userId] = user
        },
        removeUser(state, userId) {
            delete state.connectedUsers[userId]
        }

    },
    actions: {
        initSocket({ commit, dispatch }, user) {
            socket = io('//localhost:3000')
            socket.on('CONNECTED', (data) => {
                socket.emit('setUser', user)
                console.log(data)
                commit('setUsers', data.connectedUsers)
            })

            socket.on('userConnected', user => {
                console.log('A new user has connected', user)
                commit('addUser', user)
            })

            socket.on('userDisconnected', userId => {
                commit('removeUser', userId)
            })

            socket.on('receiveUpdate', payload => {
                commit(payload.mutation, payload)
            })

        },
        emitData({ commit, dispatch }, payload) {
            socket.emit('update', payload)
        }
    }
}