<template>
  <div>
    <label>start</label>
    <pv-input-text v-model="start" type="number" />
    <label>End</label>
    <pv-input-text v-model="end" type="number" />
    <pv-button @click="refresh()">Refresh</pv-button>
  </div>
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
      start: 0,
      end: 10,
      users: [],
      userService: new UserApiService(),
    };
  },
  mounted() {
    this.userService.getAll(this.start, this.end).then((response) => {
      this.users = response.data;
    });
  },
  methods: {
    refresh() {
      this.userService.getAll(this.start, this.end).then((response) => {
        this.users = response.data;
      });
    },
  },
};
</script>

<style scoped></style>
