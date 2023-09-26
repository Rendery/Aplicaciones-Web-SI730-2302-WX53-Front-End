<template>
  <label>Welcome to my page</label>

  <header>
    {{ $t("greet", { user: "Carlos" }) }}
  </header>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/users">User</router-link>
    <router-link to="/category">Category</router-link>
  </nav>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
}
</style>
