<template>
    <div id="app">
        <img src="assets/logo.png">
        <h1>{{ msg }}</h1>
        <ul>
            <button type="button" class="btn btn-light"><router-link to="/machinelist" >Liste des machines</router-link></button>
            <button type="button" class="btn btn-light"><router-link to="/machinemap" >Voir la carte</router-link></button>
        </ul>
      <router-view v-bind:machines="machines"></router-view>
    </div>

</template>

<script>
  import axios from 'axios';

    export default {
      name: 'app',
      data() {
        return {
          msg: 'Que voulez-vous faire?',
          machines: [/*{
                id: 1,
                name: 'What else ?',
                status: true,
                checkedAt: new Date(),
                latitude : 10,
                longitude : 10,
              }, {
                id: 2,
                name: 'Broken',
                status: false,
                checkedAt: new Date(),
                latitude : 11,
                longitude : 9.6,
              }*/],
          loading: false,
          error: null
        }
      },
      created()
      {
        axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.machines = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
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


    .btn {
        font-size: 25px;
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
