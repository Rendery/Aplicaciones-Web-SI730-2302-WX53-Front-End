<template>
  <ul v-for="user in users">
    <li>{{ user.name }}</li>
  </ul>
</template>

<script>
export default {
  name: "user-list-component",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => (this.users = json));
  },
};
</script>

<style scoped></style>
