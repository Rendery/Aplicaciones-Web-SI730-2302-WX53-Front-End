<script setup>
import Category from "@/components/category-component.vue";
</script>

<template>
  <header>
    {{ $t("greet", { user: "Carlos" }) }}
  </header>

  <main>
    <category
      :tutorials="[{ title: 'Calculate 1' }, { title: 'Calculate 12' }]"
      content="This course you'll learn math"
      name="Math"
    />
    <category
      :tutorials="[{ title: 'Spanish' }, { title: 'English' }]"
      content="Literature"
      name="Literature"
    />
    <category
      :tutorials="[{ title: 'Macromolecules' }, { title: 'Organic compounds' }]"
      content="molecule structure"
      name="Biology"
    />
    <category
      :tutorials="[{ title: 'Behaviorist' }, { title: 'Behaviorist' }]"
      content="the scientific study of the mind and behavior"
      name="Psychology"
    />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
