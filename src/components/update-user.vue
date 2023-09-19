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
  <pv-button @click="update()">Update user</pv-button>
</template>

<script>
import { UserApiService } from "@/services/user-api.service";

export default {
  data() {
    return {
      id: 0,
      name: "",
      username: "",
      email: "",
      userAPi: new UserApiService(),
    };
  },
  methods: {
    update() {
      const body = {
        name: this.name,
        username: this.username,
        email: this.email,
      };

      this.userAPi.update(this.id, body).then((response) => {
        if (response.status === 200) {
          alert("user updated");
        } else {
          alert("Error updating user");
        }
      });
    },
  },
  mounted() {
    this.id = this.$route.params.id;

    this.userAPi.getById(this.id).then((response) => {
      this.username = response.data.username;
      this.name = response.data.name;
      this.email = response.data.email;
    });

    //console.log("this.$route.params.id;", this.$route.params.id);
    //console.log("this.id", this.id);
    //alert("El id a modificar" + this.id.toString());
  },
  name: "update-user",
};
</script>

<style scoped></style>
