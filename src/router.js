import HomeComponent from "@/components/Home-component.vue";
import CategoryComponent from "@/components/category-component.vue";
import TutorialComponent from "@/components/tutorial-component.vue";
import notFounfComponent from "@/components/not-founf-component.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/category", component: CategoryComponent },
  { path: "/tutorial", component: TutorialComponent },
  { path: "/:pathMatch(.*)*", component: notFounfComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
