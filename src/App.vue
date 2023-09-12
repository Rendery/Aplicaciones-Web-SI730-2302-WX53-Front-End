<script setup></script>

<template>
  <header>
    {{ $t("greet", { user: "Carlos" }) }}
  </header>

  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/category">Category</router-link>
    <router-link to="/tutorial">Tutorial</router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
