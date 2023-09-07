<template>
  <label class="title">{{ $t("tutorial") }} {{ title }}</label>
  <div class="form-container">
    <label for="description">Description :</label>
    <input id="description" type="text" />
    <label for="shortname">Short name :</label>
    <pv-inputText
      id="shortname"
      aria-label="Ingrese o nombre corto"
      type="text"
    />
    <label>Count :</label>
    <input type="number" />
    <label>Date :</label>
    <input type="date" />
    <pv-dropdown
      class="w-full md:w-14rem"
      optionLabel="name"
      placeholder="Select a City"
    />

    <img alt="cat" class="logo" src="../assets/logo.svg" />
    <pv-button aria-label="click para pasar a x pagina" link>Cancel </pv-button>
    <pv-button>Save</pv-button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  name: "tutorial",
};
</script>

<style scoped>
.logo {
  height: 100px;
  width: 100%;
}

.title {
  font-style: italic;
}

.form-container {
  gap: 4px;
  margin: 8px;
}

.control {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.form-container label {
  width: 100px;
}
</style>
