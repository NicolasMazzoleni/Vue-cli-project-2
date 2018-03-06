<template>
    <div>
        <h1>Machine {{ name }}</h1>
        <h3 class="green" v-if="status">Status OK</h3>
        <h3 class="red" v-if="!status">Status KO</h3>

        <h5>Last time ckecked {{ checkedAt.toLocaleString('fr-FR') }}</h5>

    </div>
</template>

<script>
    export default {
        props: ['name', 'status', 'checkedAt']
    }
</script>

<style scoped>
.green {
    color: green;
    font-weight: bold;
}

.red {
    color: red;
    font-weight: bold;
}
div{
    border : 2px solid black;
    margin: auto;
    width: 50%;
    margin-top: 15px;
    margin-bottom: 15px;
}

</style>