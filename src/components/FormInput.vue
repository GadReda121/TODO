<template>
    <div class="form">
        <form action="">
            <input type="text" v-model="TaskName" placeholder="Add A New Task"/>
            <button class="btn w-50" @click.prevent="addTask">Add</button>
        </form>
        <TaskAdded v-for="todo in Task" :key="todo.id" :Task="todo.text" />
        <div class="d-flex justify-content-center gap-3 mt-3">
            <ClearAll @click="ClearAll"/>
        </div>
    </div>
</template>

<script>
import ClearAll from './ClearAll.vue';
import TaskAdded from './TaskAdded.vue';
import Swal from 'sweetalert2'

export default {
  components: { TaskAdded, ClearAll },
    name: "FormInput",
    data() {
        return {
            TaskName: "",
            Task: [
                {
                    id: Math.random(),
                    text:"I'll do Something..."
                }
            ],
        }
    },
    methods: {
        addTask() {
            if (this.TaskName.length === 0) {
                return;
            } else {
                this.Task.push({
                    id:  Math.floor(Math.random() * 100),
                    text: this.TaskName
                });
                this.Task.reverse();
            }
            this.TaskName = "";
            Swal.fire({
                title: 'Your task has been added successfully',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        },
        editBookItem(id) {
            //find the index of the book's id
            var objIndex = this.books.findIndex(obj => obj.id === id);
            this.editBook.title = this.books[objIndex].title;
            this.editBook.id = id;
        },
        ClearAll() {
            if (this.Task.length == 0) {
                return;
            } else {
                this.Task = [];
                let timerInterval
                Swal.fire({
                    title: 'All tasks are being deleted',
                    html: 'I will close in <b></b> milliseconds.',
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })
            }
        },
    }
}
</script>

<style scoped>
.form{
    width:50%;
}
@media screen and (max-width:767px){
    .form{
        width:80%;
    }
}
    form{
        display: flex;
        justify-content: center;
        
    }
    form input{
        height:80px;
        width: 100%;
        border:none;
        outline: none;
        padding: 0 15px;
    }
    form button{
        background-color: var(--primary-color);
        color:#fff;
        border: none;
    }
    form button:hover, form button:focus{
        background-color: var(--primary-color);
        color:#fff;
    }
</style>