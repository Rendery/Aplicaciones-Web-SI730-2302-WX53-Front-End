<script setup></script>

<template>
  <header>
    {{ $t("greet", { user: "Carlos" }) }}
  </header>

  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/users">User</router-link>
    <router-link to="/category">Category</router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
}
</style>
