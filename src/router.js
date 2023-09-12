import HomeComponent from "@/components/home-component.vue";
import CategoryComponent from "@/components/category-component.vue";
import TutorialComponent from "@/components/tutorial-component.vue";
import notFounfComponent from "@/components/not-founf-component.vue";
import { createRouter, createWebHistory } from "vue-router";
import UserListComponent from "@/components/user-list-component.vue";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/category", component: CategoryComponent },
  { path: "/tutorial", component: TutorialComponent },
  { path: "/users", component: UserListComponent },
  { path: "/:pathMatch(.*)*", component: notFounfComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
