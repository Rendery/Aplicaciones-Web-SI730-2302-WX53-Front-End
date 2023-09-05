<template>
    <label class="title">{{$t('tutorial')}}  {{title}}</label>
    <div class="form-container">
        <div class="control">
            <label  for="description">Description :</label>
            <input type="text" id="description">
        </div>
        <div class="control">
            <label for="shortname" >Short name :</label>
            <input type="text" id="shortname" aria-label="Ingrese o nombre corto" >
        </div>
        <div class="control">
            <label>Count :</label>
            <input type="number">
        </div>
        <div class="control">
            <label>Date :</label>
            <input type="date">
        </div>
        <img src="cat.jpg" alt="cat">
        <a href="google.com"  aria-label="click para pasar a x pagina" >siguiente </a>
        <button>Save</button>
    </div>

</template>

<script>
export default {
    props: {
        title: String
    },
    name: "tutorial"
}
</script>

<style scoped>
.title{
    font-style: italic;
}

.form-container{
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.control{
    display: flex;
    flex-direction: row;
    gap: 4px;
}
.form-container label{
    width: 100px;
}

</style>