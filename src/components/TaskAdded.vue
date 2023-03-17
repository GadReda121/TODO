<template>
    <div class="taskAdded mt-3" v-show="show">
        <div class="text d-flex flex-column">
            <p class="mt-3" id="task">{{ Task }}</p>
            <small>{{ currentTime }}</small>
        </div>
        <div class="btns d-flex">
            <button class="btn btn-successs w-100" @click="DoneTask">&#10003;</button>
            <button class="btn btn-danger w-100" @click="removeTask">×</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskAdded",
    data() {
        return {
            show: true,
            currentTime:""
        }
    },
    props: ['Task'],
    methods: {
        DoneTask() {
            document.querySelector("#task").classList.add("effectDone");
            document.querySelector(".text").classList.add("effectDoneTask");
        },
        removeTask() {
            this.show = false;
        },
    },
    mounted() {
        let date = new Date();
        this.currentTime = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay() + " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    }
</script>

<style scoped>
    .taskAdded{
        display: grid;
        grid-template-columns: 80% 20%;
        align-items: center;
    }
    .taskAdded .text{
        width: 100%;
        background-color: #fff;
        padding: 10px 20px;
    }
    button{
        height: 90px;
    }
    .btn-successs{
        background-color: var(--primary-color);
        border: 1px solid var(--primary-color);
        color:#fff;
    }
    .btn-successs:active, .btn-successs:hover{
        background-color: var(--primary-color);
        border: 1px solid var(--primary-color);
        color:#fff;
    }
    .effectDone{
        text-decoration:line-through;
    }
    .effectDoneTask{
        background-color: #d6d6d6 !important;
    }
    p{
        overflow-wrap: anywhere;
    }
    small{
        color:#a7a7a7;
        font-size: 10px;
    }
</style>