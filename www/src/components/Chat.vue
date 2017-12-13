<template>
        
            <div>
                <form @submit.prevent="sendChat">
                    <input type="text" v-model="newChat.body">
                </form>
        
                <div class="chatbody">
                    <div class="chat-message" v-for="m in messages">
                        <p>{{m.body}}</p>
                        <p>
                            <small>{{m.creator.name}} - <timeago :since="m.created"></timeago></small>
                        </p>
                    </div>
                </div>
        
            </div>
        
        </template>
        
        <script>
            export default {
                name: 'chat',
                data() {
                    return {
                        newChat: {}
                    }
                },
                mounted() {
                    this.$store.dispatch('get', { endpoint: 'messages', resource: 'messages' })
                },
                methods: {
                    sendChat() {
                        this.newChat.created = Date.now()
                        this.$store.dispatch('createOne', {
                            resource: 'messages',
                            endpoint: 'messages',
                            data: this.newChat,
                            emit: true
                        })
                        this.newChat = {}
                    }
                },
                computed: {
                    messages() {
                        return this.$store.state.messages
                    }
                }
            }
        </script>