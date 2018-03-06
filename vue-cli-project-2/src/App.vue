<template>
    <div id="app">
        <img src="assets/logo.png">
        <h1>{{ msg }}</h1>
        <ul>
            <button type="button" class="btn btn-primary">Consulter la liste des machines</button>
            <button type="button" class="btn btn-primary">Voir la carte</button>
        </ul>

        <machine-map></machine-map>
        <machine-list></machine-list>

    </div>

</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Que voulez-vous faire?'
            }
        }
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    img {
        width: 200px;
        height: 200px;
    }

    h1 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }


</style>
