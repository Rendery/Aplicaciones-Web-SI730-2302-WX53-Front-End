<template>
    <ToolbarComponent></ToolbarComponent>
    <CardInformationComponent api-url="https://remotive.com/api/remote-jobs?category=software-dev&limit=1"></CardInformationComponent>
    <footer-component></footer-component>
</template>

<script>
import ToolbarComponent from "@/components/Toolbar-component.vue";
import FooterComponent from "@/components/Footer-component.vue";
import CardInformationComponent from "@/components/Card-information-component.vue";
export default {
  name: "Home",
    components: {CardInformationComponent, FooterComponent, ToolbarComponent},
};
</script>

<style scoped></style>
