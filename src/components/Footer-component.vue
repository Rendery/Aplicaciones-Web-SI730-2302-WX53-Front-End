<template>
    <div class="footer">
        <p>&copy; 2023 RESTJob, Inc All rights reserved.</p>
        <p>Developed by {{ developerName }}</p>
    </div>
</template>

<script>
export default {
    name: "Footer-component",
    data() {
        return {
            developerName: "Edery Renzo Abanto Vicente",
            developerCode: "u201822832",
        };
    },
};
</script>

<style scoped>
.footer {
    background-color: #1e1e1e;
    padding: 10px;
    text-align: center;
}
</style>