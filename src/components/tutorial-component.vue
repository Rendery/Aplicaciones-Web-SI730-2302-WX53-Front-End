<template>
  <label class="title">{{ $t("tutorial") }} {{ title }}</label>
  <div class="flex flex-column lg:flex-row">
    <div class="flex">
      <label for="description">Description :</label>
      <input id="description" type="text" />
    </div>
    <div class="flex">
      <label for="shortname">Short name :</label>
      <pv-inputText
        id="shortname"
        aria-label="Ingrese o nombre corto"
        type="text"
      />
    </div>

    <div class="flex">
      <label>Count :</label>
      <input type="number" />
    </div>

    <div class="row">
      <label>Date :</label>
      <input type="date" />
    </div>
    <div class="row">
      <label>City</label>
      <pv-dropdown
        class="w-full md:w-14rem"
        optionLabel="name"
        placeholder="Select a City"
      />
    </div>
    <img alt="cat" class="logo" src="../assets/logo.svg" />
    <pv-button aria-label="click para pasar a x pagina" link>Cancel</pv-button>
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
  /* display: flex;
                           flex-direction: column;*/
  gap: 10px;
}

.control {
  /*display: flex;
                        flex-direction: row; */
  gap: 4px;
}

.form-container label {
  width: 100px;
}
</style>
