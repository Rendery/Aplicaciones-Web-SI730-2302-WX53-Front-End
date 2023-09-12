<template>
  <ul v-for="user in users">
    <li>{{ user.id + " - " + user.name }}</li>
  </ul>
</template>

<script>
import { UserApiService } from "@/services/user-api.service";

export default {
  name: "user-list-component",
  data() {
    return {
      users: [],
      userService: new UserApiService(),
    };
  },
  mounted() {
    this.userService.getAll().then((response) => {
      this.users = response.data;
    });
  },
};
</script>

<style scoped></style>
