<template>
    <div>
        <div>
            <h1 style="font-size: 3em" class="text-center">
                <strong>{{board.name}}</strong>
            </h1>
            <form class="listForm" @submit.prevent="createList">
                <div class="form-group">
                    <label for="list">Create New List</label>
                    <input class="form-control" type="text" name="list" placeholder="list name" v-model='list.name' required>
                    <button type="submit">
                        <samp>Add List</samp>
                    </button>
                </div>
            </form>
        </div>
        <div v-for="list in lists">
            <list :listprop="list"></list>
        </div>
    </div>
</template>
<script>
    import list from "./list"
    export default {
        name: 'board',
        data() {
            return {
                list: {
                    name: "",
                    description: ""

                }
            }
        },
        mounted() {
            this.$store.dispatch('getBoard', this.$route.params.id)
            this.$store.dispatch('getLists', this.$route.params.id)



        },
        computed: {
            board() {
                return this.$store.state.activeBoard
            },
            lists() {
                return this.$store.state.lists
            }
        },
        methods: {
            createList() {
                this.list = {
                    name: this.list.name,
                    description: this.list.description,
                    boardId: this.board._id
                }
                this.$store.dispatch('createList', this.list)

                this.list = {
                    name: ""
                }
            },
            removeList(list) {
                this.$store.dispatch('removeList', list)

            }
        },
        components: {
            list
        }
    }
</script>

<style scoped>
    .h1 {
        color: whitesmoke;
        font-family: 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 5em
    }


    .listForm {
        width: 100vw;
        padding-left: 30vw;
        padding-right: 30vw;
        text-align: center;

    }

    .form-control {
        text-align: center;

    }

    .item {
        padding: 5px;
        text-align: center;

    }

    a {
        color: white
    }
</style>