<template>
    <div class="container-fluid">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
            <h2>{{listprop.name}}  <span id="end" @click="removeList" class="glyphicon glyphicon-trash"></span></h2>
            
            <div v-for="task in tasks">
                <task :taskprop="task"></task>
            </div>
            <form class="taskForm" @submit.prevent="createTask">
                <div class="form-group">
                    <input class="form-control" type="text" name="task" placeholder="task name" v-model='task.name' required>
                    <button class="btn btn-primary">
                        <samp>Add Task</samp>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
    import task from "./task"
    export default {
        name: 'list',
        props: ["listprop"],
        data() {
            return {
                task: {
                    name: "",

                }
            }
        },
        mounted() {
            this.$store.dispatch('getTasks',
                {
                    boardId: this.$route.params.id,
                    listId: this.listprop._id
                })

        },

        computed: {
            tasks() {
                return this.$store.state.tasks[this.listprop._id]

            }
        },
        methods: {
            createTask() {
                this.task = {
                    name: this.task.name,
                    description: this.task.description,
                    boardId: this.listprop.boardId,
                    listId: this.listprop._id
                }

                this.$store.dispatch('createTask', this.task)

                this.task = {
                    name: ""
                }

            },
            removeList() {
                this.$store.dispatch('removeList', this.listprop)

            }
        },
        components: {
            task
        }
    }
</script>

<style scoped>
    #end {
        font-size: small;
        cursor: pointer;
        color: rgb(156, 26, 26);
        display: inline
    }


    .form-control {
        text-align: center;
    }

    a {
        color: white;
    }

    .row {
        display: flex;
        /* justify-content: space-around; */
    }
</style>