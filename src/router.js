import HomeComponent from "@/components/home-component.vue";
import notFounfComponent from "@/components/not-founf-component.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/:pathMatch(.*)*", component: notFounfComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
