<template>
    <div>
        <div>
            <h3 class="task text-center">{{taskprop.name}}
                    <span @click="removeTask" class="glyphicon glyphicon-trash"></span>
              </h3>
              <h6>Move to:
                <select v-on:change="putTask" v-model="listId">
                    <option v-for="list in lists" :value="list._id">{{list.name}}</option>
                </select>
          </h6>
            <div v-for="comment in comments">
                <samp>"{{comment.message}}" <span @click="removeComment(comment)" class="glyphicon glyphicon-trash"></span>
                </samp>
            </div>
            <form class="commentForm" @submit.prevent="createComment">
                <div class="form-group">
                    <input class="form-control" type="text" name="comment" placeholder="comment" v-model='comment.message' required>
                    <button class="btn btn-danger">
                        <samp>Add Comment</samp>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: ["taskprop"],
        data() {
            return {
                comment: {
                    message: "",

                },
                listId: ""
            }
        },
        mounted() {
            this.$store.dispatch('getComments',
                {
                    boardId: this.$route.params.id,
                    listId: this.taskprop.listId,
                    taskId: this.taskprop._id
                })

        },
        computed: {
            comments() {
                return this.$store.state.comments[this.taskprop._id]
            },
            lists() {
                return this.$store.state.lists
            }
        },

        methods: {
            removeComment(comment) {
                this.$store.dispatch('removeComment', comment)
                

            },
            createComment() {
                this.comment = {
                    message: this.comment.message,
                    boardId: this.taskprop.boardId,
                    listId: this.taskprop.listId,
                    taskId: this.taskprop._id
                }

                this.$store.dispatch('createComment', this.comment)

                this.comment = {
                    message: ""
                }

            },
            removeTask() {
                this.$store.dispatch('removeTask', this.taskprop)
                this.task = {
                    name: ""
                }

            },
            putTask(){
                var task = this.taskprop
                var oldTask= {
                    boardId: this.taskprop.boardId,
                    listId: this.taskprop.listId
                }
                task.listId = this.listId
                this.$store.dispatch('putTask', {task: task, oldTask: oldTask})
            }

        },
        components: {}
    }
</script>

<style scoped>
    .d {
        cursor: pointer;
        color: red;

    }

    .d:hover {
        color: red;

    }

    .glyphicon {
        padding-left: 5px;
        cursor: pointer;
    }

    p {
        font-size: .5em
    }
</style>