<template>
    <div>
        <br>
        <form class="boardForm" @submit.prevent="createBoard">
            <div class="form-group ">
                <label style="font-size: 2em" for="board">Your Boards</label>
                <h3>Create a new board:</h3>
                <input maxlength="25" class="form-control " type="text" name="board" placeholder="Board Name" v-model='board.name' required>
                <button type="submit">
                    <samp>Create Board</samp>
                </button>
            </div>
        </form>
        <div class="row text-center">
            <div class="card text-center">
                <div class="card-block" v-for="board in boards">
                    <router-link class="card-title" :to="'/boards/'+board._id" style="font-size: 1.5em">{{board.name}}</router-link>
                    <button class="btn btn-danger" @click="removeBoard(board)">delete</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'boards',
        data() {
            return {
                board: {
                    name: ""
                }

            }
        },
        mounted() {
            this.$store.dispatch('getBoards')
        },
        computed: {
            boards() {
                return this.$store.state.boards
            }

        },
        methods: {
            createBoard() {
                this.$store.dispatch('createBoard', this.board)
                this.board = {
                    name: ''
                }

            },
            removeBoard(board) {
                this.$store.dispatch('removeBoard', board)

            }
        }
    }
</script>

<style scoped>
    .boardForm {
        width: 100vw;
        padding-left: 30vw;
        padding-right: 30vw;
        text-align: center;

    }

    .card-block {
        background-color: grey;
        outline: 1px solid white;
        margin-left: 30%;
        margin-right: 30%;
        padding: 20px
    }

    .btn-danger {
        float: right;
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