import HomeComponent from "@/components/home-component.vue";
import CategoryComponent from "@/components/category-component.vue";
import TutorialComponent from "@/components/tutorial-component.vue";
import notFounfComponent from "@/components/not-founf-component.vue";
import { createRouter, createWebHistory } from "vue-router";
import UserListComponent from "@/components/user-list-component.vue";
import CreateUserComponent from "@/components/create-user.component.vue";
import UpdateUser from "@/components/update-user.vue";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/category", component: CategoryComponent },
  { path: "/tutorial", component: TutorialComponent },
  { path: "/users", component: UserListComponent },
  { path: "/create-user", component: CreateUserComponent },
  { path: "/udpate-user/:id", component: UpdateUser, name: "updateUser" },
  { path: "/:pathMatch(.*)*", component: notFounfComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
