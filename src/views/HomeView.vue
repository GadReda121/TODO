<template>
    <div class="parent d-flex flex-column gap-2">
        <lord-icon
            src="https://cdn.lordicon.com/dxoycpzg.json"
            trigger="boomerang"
            colors="primary:#e5d1fa,secondary:#646e78,tertiary:#a866ee,quaternary:#ebe6ef,quinary:#f9c9c0"
            style="width:250px;height:250px">
        </lord-icon>
        <Title />
        <FormInput />
    </div>
</template>

<script>
import FormInput from '../components/FormInput.vue';
import Title from '../components/Title.vue';

export default {
    name: "HomeView",
    components: { FormInput, Title }
}
</script>

<style scoped>
.parent{
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
