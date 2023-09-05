<template>
    <label class="title">{{$t('tutorial')}} {{title}}</label>
</template>

<script>
export default {
    props: {
        title: String
    },
    name: "tutorial"
}
</script>

<style scoped>
.title{
    font-style: italic;
}
</style>