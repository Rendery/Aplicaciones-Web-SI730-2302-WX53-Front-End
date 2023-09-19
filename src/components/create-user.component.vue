<template>
  <div class="row">
    <label>name</label>
    <pv-input-text id="name" v-model="name"></pv-input-text>
  </div>
  <div class="row">
    <label>username</label>
    <pv-input-text id="username" v-model="username"></pv-input-text>
  </div>
  <div class="row">
    <label>email</label>
    <pv-input-text id="email" v-model="email"></pv-input-text>
  </div>
  <pv-button @click="create()">Create user</pv-button>
</template>

<script>
import { UserApiService } from "@/services/user-api.service";

export default {
  name: "create-user.component",
  data() {
    return {
      name: "",
      username: "",
      email: "",
      userApi: new UserApiService(),
    };
  },
  methods: {
    create() {
      const body = {
        name: this.name,
        username: this.username,
        email: this.email,
      };

      this.userApi.create(body).then((response) => {
        if (response.status === 201) {
          alert("user created");
        } else {
          alert("user not created,contact administrator");
        }
      });
    },
  },
};
</script>

<style scoped></style>
